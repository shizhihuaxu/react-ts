import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import NoMatch from '@components/NoMatch'
import Login from '@containers/views/Login'
import Home from '@containers/views/Home'
import './index.module.scss'

function App() {
    return (
        <ConfigProvider locale={zhCN}>
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/' element={<Home />}></Route>
                <Route path='*' element={<NoMatch />}></Route>
            </Routes>
        </ConfigProvider>
    )
}

export default App
