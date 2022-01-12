import React from 'react'
import ReactDOM from 'react-dom'
import App from '@containers/shared/App'
import 'antd/dist/antd.css'
// 字体图标
import './assets/iconfonts/iconfont.css'
import './assets/iconfonts/iconfont.js'
// 通用样式
import './styles/reset.scss'
import './styles/utils.scss'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
