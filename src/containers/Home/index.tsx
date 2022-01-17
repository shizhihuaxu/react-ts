import React from 'react'
import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'
import routes, { IRoute } from '@scripts/router'
import NoMatch from '@components/NoMatch'
import Header from './Header'
import Sidebar from './Sidebar'
import styles from './index.module.scss'

function Home() {
    // 生成 Route 组件
    function getRoutes(routes: IRoute[]) {
        return routes.map(item => {
            if (item.children) {
                return (
                    <Route key={item.key} index={item.isIndex} path={item.path} element={<item.element />}>
                        {getRoutes(item.children)}
                    </Route>
                )
            }
            return <Route key={item.key} index={item.isIndex} path={item.path} element={<item.element />} />
        })
    }

    return (
        <Layout className={styles.app}>
            <Header />
            <Layout className={styles.appBody}>
                <Sidebar />
                <Layout>
                    <Layout.Content className={styles.appContent}>
                        <Routes>
                            {getRoutes(routes)}
                            <Route path='*' element={<NoMatch />} />
                        </Routes>
                    </Layout.Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default Home
