import React from 'react'

interface AuthContextType {
    token: any
    login: (token: string, callback: VoidFunction) => void
    logout: (callback: VoidFunction) => void
}

export const AuthContext = React.createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [token, setToken] = React.useState<any>(null)

    // 登录
    const login = (token: string, callback: VoidFunction) => {
        setToken(token)
        callback()
    }

    // 退出
    const logout = (callback: VoidFunction) => {
        setToken(null)
        callback()
    }

    const value = { token, login, logout }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default function useAuthContext() {
    return React.useContext(AuthContext)
}
