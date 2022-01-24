import React from 'react'
import { Button } from 'antd'

function Login() {
    function login() {
        console.log(1)
    }

    return <div>
        <Button onClick={login}>login</Button>
    </div>
}

export default Login
