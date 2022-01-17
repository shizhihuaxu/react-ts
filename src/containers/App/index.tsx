import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import Login from '@containers/Login'
import Home from '@containers/Home'
import './index.module.scss'

function App() {
    return (
        <ConfigProvider locale={zhCN}>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                {/* NOTE https://reactrouter.com/docs/en/v6/getting-started/overview#descendant-routes */}
                <Route path='/*' element={<Home />} />
            </Routes>
        </ConfigProvider>
    )
}

export default App
