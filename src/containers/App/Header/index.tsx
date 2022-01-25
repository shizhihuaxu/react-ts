import React from 'react'
import { Layout, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import useAuthContext from '@/store/AuthStore'
import styles from './index.module.scss'

function Header() {
    const auth = useAuthContext()
    const navigate = useNavigate()

    function logout() {
        auth.logout(() => {
            navigate('/login')
        })
    }

    return (
        <Layout.Header className={styles.header}>
            <div>
                <Button onClick={logout}>logout</Button>
            </div>
        </Layout.Header>
    )
}

export default Header
