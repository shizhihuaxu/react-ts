import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { ConfigProvider, Layout } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import useAuthContext, { AuthProvider } from '@/store/AuthStore'
import routes, { IRoute } from '@/router'
import Header from './Header'
import Sidebar from './Sidebar'
import styles from './index.module.scss'

// 页面布局通用组件
function PageLayout({ children }: { children: React.ReactNode }) {
    return <Layout className={styles.app}>
        <Header />
        <Layout className={styles.appBody}>
            <Sidebar />
            <Layout>
                <Layout.Content className={styles.appContent}>
                    {children}
                </Layout.Content>
            </Layout>
        </Layout>
    </Layout>
}

// 需要鉴权的页面
function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useAuthContext()
    const location = useLocation()

    if (!auth.token) {
        return <Navigate
            to="/login"
            state={{ from: location }}
            replace />
    }

    return children
}

function App() {
    // NOTE 这里可以写为箭头函数的形式吗，如果不行为什么
    // 生成 Route 组件
    function getRoutes(routes: IRoute[]) {
        return routes.map(item => {
            // 处理是否为全屏
            const layoutElem = !item.meta?.isFullPage ?
                <PageLayout>
                    <item.element />
                </PageLayout>
                : <item.element />

            // 处理是否需要路由鉴权
            const element = !item.meta?.noAuth ?
                <RequireAuth>
                    {layoutElem}
                </RequireAuth>
                : layoutElem

            if (item.children) {
                return (
                    <Route
                        key={item.path}
                        index={item.isIndex}
                        path={item.path}
                        element={element}>
                        {getRoutes(item.children)}
                    </Route>
                )
            }
            return <Route
                key={item.path}
                index={item.isIndex}
                path={item.path}
                element={element} />
        })
    }

    return (
        <ConfigProvider locale={zhCN}>
            <AuthProvider>
                <Routes>{getRoutes(routes)}</Routes>
            </AuthProvider>
        </ConfigProvider>
    )
}

export default App
