// 消息提示
import { message } from 'antd'
import { getType } from '@scripts/utils'

const heartTimeout = 10 * 60 * 1000 // 10 min，心跳检测间隔时间
const reopenTimeout = 10 * 1000 // 重连间隔 10s

let urlPrefix = '' // weboscket 请求前缀

// 设置 weboscket 请求前缀
function setUrlPrefix() {
    const socketUrl = process.env.REACT_APP_SOCKET_URL

    if (!socketUrl) {
        const loc = window.location
        const protocol = loc.protocol
        const host = loc.host

        urlPrefix = `${protocol === 'https:' ? 'wss' : 'ws'}://${host}`
    } else {
        urlPrefix = socketUrl
    }
}

setUrlPrefix()

// socket 构造函数
function Socket(this: any, urlSuffix: string, msgCallback: VoidFunction) {
    this.conn = null // 连接实例
    this.urlSuffix = urlSuffix // url 前缀
    this.msgCallback = msgCallback // 接收到消息的回调函数
    this.heartCheckTimer = null // 心跳检测定时器
    this.reopenTimer = null // 重连定时器
    this.disconnectInitiative = false // 是否主动断开
}

Socket.prototype = {
    /**
     * 建立连接
     * @param { string } urlSuffix 连接的 url 后缀
     * @param { function } msgCallback  接收到消息后执行的回调函数
     */
    connect(data: { [key: string]: any }) {
        if (this.conn && this.conn.readyState === 1) { // 判断是否已经成功连接
            return
        }

        // 拼接请求 url
        const url = `${urlPrefix}${this.urlSuffix}`

        // 创建 Websocket 实例
        if (window.WebSocket) {
            this.conn = new WebSocket(url)
        } else {
            return message.error('您的浏览器不支持WebSocket。请选择其他的浏览器再尝试连接服务器')
        }

        // 成功建立连接，检测连接状态
        this.conn.onopen = () => {
            this.heartCheck()
            this.send(data)
        }

        // 从服务器接受到信息
        this.conn.onmessage = (evt: any) => {
            if (!evt || !evt.data) { // 事件本身的 data字段
                return
            }

            const data = getType(evt.data) === 'string' ? JSON.parse(evt.data) : evt.data

            // 接收到的是 ack 表示确认心跳检测，不做处理
            if (data.data === 'ack') return

            // 执行回调函数
            this.msgCallback(data) // 传输内容的data字段
        }

        // 连接关闭
        this.conn.onclose = (evt: any) => {
            // 清空心跳的定时器，不需要再检测了
            this.heartCheckTimer && clearInterval(this.heartCheckTimer)

            // 非人为关闭需要重新建立连接
            if (!this.disconnectInitiative) {
                this.reconnect()
            }

            this.disconnectInitiative = false
        }

        // 连接错误，会同时触发 close 事件
        this.conn.onerror = () => { console.log('websocket closed') }

        return this
    },
    // 检测连接是否还存在
    heartCheck() {
        this.heartCheckTimer && clearInterval(this.heartCheckTimer)

        this.heartCheckTimer = setInterval(() => {
            this.send({ message: 'heartbeat', data: null })
        }, heartTimeout)
    },
    // 重连
    reconnect() {
        this.reopenTimer && clearTimeout(this.reopenTimer)

        // 避免持续重连持续触发错误
        this.reopenTimer = setTimeout(() => {
            this.connect()
        }, reopenTimeout)
    },
    // 发送数据
    send(data: { [key: string]: any }) {
        if (this.conn && this.conn.readyState === 1) { // 已连接状态可发送消息
            this.conn.send(getType(data) === 'object' ? JSON.stringify(data) : data)
        }
    },
    // 手动关闭连接
    disconnect() {
        if (this.conn) {
            this.conn.close()
        }

        this.disconnectInitiative = true
    },
}

export default Socket

