import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ConfigProvider, Layout } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import routes, { IRoute } from './route'
import Header from './Header'
import Sidebar from './Sidebar'
import styles from './index.module.scss'

function App() {
    // 生成 Route 组件
    function getRoutes(routes: IRoute[]) {
        return routes.map(item => {
            if (item.children) {
                return (
                    <Route
                        key={item.path}
                        index={item.isIndex}
                        path={item.path}
                        element={<item.element />}>
                        {getRoutes(item.children)}
                    </Route>
                )
            }
            return <Route
                key={item.path}
                index={item.isIndex}
                path={item.path}
                element={<item.element />} />
        })
    }

    return (
        <ConfigProvider locale={zhCN}>
            <Layout className={styles.app}>
                <Header />
                <Layout className={styles.appBody}>
                    <Sidebar />
                    <Layout>
                        <Layout.Content className={styles.appContent}>
                            <Routes>{getRoutes(routes)}</Routes>
                        </Layout.Content>
                    </Layout>
                </Layout>
            </Layout>
        </ConfigProvider>
    )
}

export default App
