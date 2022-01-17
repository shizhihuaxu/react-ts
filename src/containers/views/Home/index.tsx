import React from 'react'
import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'
import routes from '@scripts/router'
import NoMatch from '@components/NoMatch'
import Header from './Header'
import Sidebar from './Sidebar'
import styles from './index.module.scss'

function Home() {
    return (
        <Layout className={styles.app}>
            <Header />
            <Layout className={styles.appBody}>
                <Sidebar />
                <Layout>
                    <Layout.Content className={styles.appContent}>
                        {/* TODO 考虑嵌套路由的处理 */}
                        <Routes>
                            {routes.map(item => {
                                if (!item.path) return null

                                return <Route key={item.key} index={item.isIndex} path={item.path} element={<item.element />} />
                            })}
                            <Route path='*' element={<NoMatch />} />
                        </Routes>
                    </Layout.Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default Home
