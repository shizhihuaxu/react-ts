import React from 'react'

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

export default function useAuthContext() {
    return React.useContext(AuthContext)
}
