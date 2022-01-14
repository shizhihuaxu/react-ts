import React from 'react'
import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'
import NoMatch from '@components/NoMatch'
import Header from './Header'
import Sidebar from './Sidebar'
import menu, { asyncComponents } from './menu'
import styles from './index.module.scss'

function Home() {
    return (
        <Layout className={styles.app}>
            <Header />
            <Layout className={styles.appBody}>
                <Sidebar />
                <Layout>
                    <Layout.Content className={styles.appContent}>
                        <Routes>
                            {menu.map(item => {
                                if (!item.path) return null

                                const CurComponent = asyncComponents[item.component]

                                return <Route key={item.id} path={item.path} element={<CurComponent />} />
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
