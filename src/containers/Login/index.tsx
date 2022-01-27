import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import useAuthContext from '@/store/AuthStore'
import { login } from '@services/http'
import { encryptPassword } from '@scripts/encryption'
import styles from './index.module.scss'

function Login() {
    const auth = useAuthContext()
    const navigate = useNavigate()

    // 表单校验
    const formValidators = {
        username: [{ required: true, message: '请输入用户名' }],
        password: [{ required: true, message: '请输入密码' }],
    }

    // 登录
    function hangleLogin(values: any) {
        const { username, password } = values

        const params = {
            username,
            password: encryptPassword(password),
            login_type: 0,
        }

        // 登录成功后跳转到 test 页面
        login(params).then(res => {
            const { token } = res.data
            auth.login(token, () => navigate('/test/1'))
        })
    }

    return (
        <div className={styles.pageLogin}>
            <Form
                className={styles.loginForm}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 10 }}
                onFinish={hangleLogin}
                autoComplete="off"
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={formValidators.username}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="密码"
                    name="password"
                    rules={formValidators.password}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                        type="primary"
                        htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login
