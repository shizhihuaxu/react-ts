import React from 'react'
import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'
import NoMatch from '@components/NoMatch'
import Header from './Header'
import Sidebar from './Sidebar'
import styles from './index.module.scss'

const menu = [
    {
        id: 1,
        path: '/',
        title: 'bio',
        component: 'Biochemical'
    }
]

function Home() {
    return (
        <Layout className={styles.app}>
            <Header />
            <Layout className={styles.appBody}>
                <Sidebar />
                <Layout>
                    <Layout.Content className={styles.appContent}>
                        <Routes>
                            {menu.map(m => {
                                if (!m.path) {
                                    return null
                                }

                                return <Route key={m.id} path={m.path} element={m.component ? asynchronousComponents[m.component] : null} />
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
