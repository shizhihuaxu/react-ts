import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import IconFont from '@components/IconFont'
import menus, { IMenu } from './menu'

const { SubMenu } = Menu

function Sidebar() {
    // 生成 menu 组件
    function getMenus(menus: IMenu[]) {
        return menus.map(item => {
            if (item.children) {
                return (
                    <SubMenu key={item.path} title={item.title} icon={item.icon ? <IconFont type={item.icon} /> : null}>
                        {getMenus(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.path}>
                    <Link to={item.path}>{item.title}</Link>
                </Menu.Item>
            )
        })
    }

    return (
        <Layout.Sider>
            <IconFont type='bl-icon-log' />
            <Menu>{getMenus(menus)}</Menu>
        </Layout.Sider>
    )
}

export default Sidebar
