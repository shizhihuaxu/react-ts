import $axios from '@services/http/axios'
import API from '@services/http/api-constants'

// ----------------------------   登录登出 -------------------------
/**
 * @method login
 * @desc 用户登录 [POST]
 * @param { object } data 用户名与密码
 * @return { promise } 响应结果
 */
export const login = (data: { username: string, password: string, login_type: number }) => {
    return $axios({
        url: API.LOGIN,
        method: 'POST',
        data,
    })
}

/**
 * @method logout
 * @desc 用户登出 [GET]
 * @return { promise } 响应结果
 */
export const logout = () => {
    return $axios({
        url: API.LOGOUT,
        method: 'GET',
    })
}
