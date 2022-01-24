import React from 'react'
import { Layout, Button } from 'antd'

function Header() {
    function logout() {
        console.log(1)
    }

    return (
        <Layout.Header>
            <div>header</div>
            <Button onClick={logout}>logout</Button>
        </Layout.Header>
    )
}

export default Header
