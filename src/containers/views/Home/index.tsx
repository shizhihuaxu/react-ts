import React from 'react'
import { Layout } from 'antd'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import styles from './index.module.scss'

const menu = [
    {
        id: 1,
        path: '/',
        title: 'bio',
        component: 'Biochemical',
        exact: true
    },
]

function Home() {
    return (
        <Layout className={styles.app}>
            <Header />
            <Layout className={styles.appBody}>
                <Sidebar />
                <Layout>
                    <Layout.Content className={styles.appContent}>
                            <Router>
                                <Switch>
                                {menu.map(m => {
                                        if (!m.path) {
                                            return null
                                        }
                                    return (
                                        <Route
                                            key={m.id}
                                            exact={m.exact}
                                            path={m.path}
                                            component={m.component ? asynchronousComponents[m.component] : null}
                                        />
                                    })}
                                })}
                                <Route component={Error} />
                                </Switch>
                            </Router>
                    </Layout.Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default Home
