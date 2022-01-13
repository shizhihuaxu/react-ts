import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
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
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
