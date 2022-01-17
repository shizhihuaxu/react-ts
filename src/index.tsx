import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// 先引入组件库样式，保证组件中书写的样式能够覆盖
import 'antd/dist/antd.css'

// 字体图标
import './assets/iconfonts/iconfont.css'
import './assets/iconfonts/iconfont.js'

// 通用样式
import './styles/reset.scss'
import './styles/utils.scss'

import App from '@containers/App'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
