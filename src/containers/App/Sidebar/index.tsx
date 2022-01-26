import React from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import IconFont from '@components/IconFont'
import menus, { IMenu } from './menu'
import styles from './index.module.scss'

const { SubMenu } = Menu

function Sidebar() {
    // 生成 menu 组件
    function getMenus(menus: IMenu[]) {
        return menus.map(item => {
            const icon = item.icon ? <IconFont type={item.icon} /> : null

            if (item.children) {
                return (
                    <SubMenu
                        key={item.path}
                        title={item.title}
                        icon={icon}>
                        {getMenus(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item
                    key={item.path}
                    icon={icon}>
                    <NavLink to={item.path}>{item.title}</NavLink>
                </Menu.Item>
            )
        })
    }

    return (
        <Layout.Sider>
            <Menu className={styles.menu}>{getMenus(menus)}</Menu>
        </Layout.Sider>
    )
}

export default Sidebar
