import qs from 'qs'
import axios, { AxiosRequestConfig } from 'axios'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
import { encryptToken } from '@scripts/encryption'

const navigate = useNavigate()

// axios 默认配置
const DEFAULT_CONFIG: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 2000,
    withCredentials: true, // 携带凭证，此处设置允许携带 cookie
    responseType: 'json', // 返回数据类型
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
    validateStatus(status) { // 定义 resolve 响应状态码
        return (
            (status >= 200 && status < 300)
        )
    },
    paramsSerializer(params) {
        return qs.stringify(params, { arrayFormat: 'repeat' })
    },
}

// 需要登录授权的错误码
const AUTH_CODE: number[] = [401, 403]

// 错误码对应的错误提示信息
const ERROR_MSG: { [key: string]: string } = {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    500: 'Internal Server Error',
}

/**
 *
 * @param [String] url 请求 url
 * @param [Object] data 请求参数
 */
const $axios = ({ url, method, data }: AxiosRequestConfig) => {
    const instance = axios.create(DEFAULT_CONFIG)
    const options: AxiosRequestConfig = {
        url: url,
        method: method,
    }

    // 根据处理请求方法处理数据
    instance.interceptors.request.use(
        config => {
            const method = config?.method?.toLocaleLowerCase()

            // token 加密
            const token = localStorage.getItem('token')
            if (token) {
                config!.headers!.Authorization = `Token ${encryptToken(token)}` // 非空断言
            }

            if (method === 'get') {
                options.params = data
            } else {
                options.data = data
            }

            return config
        },
        error => Promise.reject(error)
    )

    // 处理响应数据
    instance.interceptors.response.use(
        response => {
            return response
        },
        error => {
            const { status } = error.response

            if (AUTH_CODE.includes(status)) {
                message.destroy()
                message.error(ERROR_MSG[status])
                navigate('/login')

                return
            }

            return Promise.reject({
                status: status,
                msg: ERROR_MSG[status] || 'network error',
            })
        }
    )

    return instance
        .request(options)
        .then(res => res)
        .catch(err => {
            message.destroy()
            message.error(
                err.response || err.msg || err.stack || 'unknown error'
            )

            return Promise.reject(err)
        })
}

export default $axios
