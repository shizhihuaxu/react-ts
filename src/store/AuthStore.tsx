import React from 'react'
import { useNavigate } from 'react-router-dom'

interface AuthContextType {
    user: any
    login: (user: string, callback: VoidFunction) => void
    logout: (callback: VoidFunction) => void
}

export const AuthContext = React.createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = React.useState<any>(null)

    // 登录
    const login = (user: string, callback: VoidFunction) => {
        setUser(user)
        callback()
    }

    // 退出
    const logout = (callback: VoidFunction) => {
        setUser(null)
        callback()
    }

    const value = { user, login, logout }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function AuthConsumer({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate()

    return <AuthContext.Consumer>
        {value => {
            if (!value.user) {
                navigate('/login')
            }

            return children
        }}
    </AuthContext.Consumer>
}
