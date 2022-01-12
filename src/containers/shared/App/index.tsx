import React from 'react'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import Biochemical from '@containers/views/Biochemical'
import Home from '@containers/views/Home'
import './index.module.scss'

const App: React.FC = () => {
    return (
        <ConfigProvider locale={zhCN}>
            <Home />
        </ConfigProvider>
    )
}

export default App
