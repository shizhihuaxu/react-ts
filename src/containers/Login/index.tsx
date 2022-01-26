import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import useAuthContext from '@/store/AuthStore'
import { login } from '@services/http'
import { encryptPassword } from '@scripts/encryption'

function Login() {
    const auth = useAuthContext()
    const navigate = useNavigate()

    const params = {
        username: 'user',
        password: encryptPassword('abcd'),
        login_type: 0,
    }

    function hangleLogin() {
        // 登录成功后跳转到 test 页面
        login(params).then(res => {
            console.log(res)
            auth.login('xinhong', () => navigate('/test/1'))
        })
    }

    return <div>
        <Button onClick={hangleLogin}>login</Button>
    </div>
}

export default Login
