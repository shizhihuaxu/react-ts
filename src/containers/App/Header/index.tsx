import React from 'react'
import { Layout, Menu, Dropdown } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
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

    const menu = (
        <Menu>
            <Menu.Item key='info'>
                <Link to='/userInfo'>账号设置</Link>
            </Menu.Item>
            <Menu.Item key='logout'>
                <div onClick={logout}>退出</div>
            </Menu.Item>
        </Menu>
    )

    return (
        <Layout.Header className={styles.header}>
            <img
                src={require('@assets/common/logo.png').default}
                width={97}
                height={26} />
            <Dropdown overlay={menu}>
                <UserOutlined />
            </Dropdown>
        </Layout.Header>
    )
}

export default Header
