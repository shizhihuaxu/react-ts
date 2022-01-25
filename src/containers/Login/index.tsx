import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import useAuthContext from '@/store/AuthStore'

function Login() {
    const auth = useAuthContext()
    const navigate = useNavigate()

    async function login() {
        // 登录成功后跳转到 test 页面
        auth.login('test', () => {
            navigate('/test/1')
        })
    }

    return <div>
        <Button onClick={login}>login</Button>
    </div>
}

export default Login
