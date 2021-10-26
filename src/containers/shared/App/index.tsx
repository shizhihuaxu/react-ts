import React, { FC } from 'react'
import { ConfigProvider, Button } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import './index.scss'

const App: FC = () => {
    return (
        <ConfigProvider locale={zhCN}>
            <Button type="primary">Button</Button>
        </ConfigProvider>
    )
}

export default App
