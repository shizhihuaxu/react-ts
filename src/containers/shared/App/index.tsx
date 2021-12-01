import React from 'react'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import Biochemical from '@containers/views/Biochemical'
import './index.module.scss'

const App: React.FC = () => {
    return (
        <ConfigProvider locale={zhCN}>
            <Biochemical />
        </ConfigProvider>
    )
}

export default App
