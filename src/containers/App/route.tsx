import React from 'react'
import Loadable from '@loadable/component'
import PageLoading from '@/components/PageLoading'

// 路由懒加载组件
const lazyLoadComponent = (loader: () => Promise<any>) => Loadable(loader, { fallback: <PageLoading /> })

interface IMeta {
    noAuth?: boolean // true 不需要鉴权, false or undefined 需要鉴权
    isFullPage?: boolean // true 全屏不显示顶部及侧边导航
}

export interface IRoute {
    path: string
    element: any // TODO 如何写为懒加载的组件的类型
    isIndex?: boolean // 标识是否为默认子路由
    meta?: IMeta
    children?: IRoute[] // 子路由
}

export const routes: IRoute[] = [
    {
        path: '/',
        element: lazyLoadComponent(() => import('@containers/Login')),
        meta: {
            noAuth: true,
            isFullPage: true
        }
    },
    {
        path: '/login',
        element: lazyLoadComponent(() => import('@containers/Login')),
        meta: {
            noAuth: true,
            isFullPage: true
        }
    },
    {
        path: '/bio',
        element: lazyLoadComponent(() => import('@containers/Biochemical')),
        meta: {
            isFullPage: true
        }
    },
    {
        path: '/test/:id',
        element: lazyLoadComponent(() => import('@containers/Test'))
    },
    {
        path: '*',
        element: lazyLoadComponent(() => import('@components/NoMatch')),
        meta: {
            noAuth: true,
            isFullPage: true
        }
    }
]

export default routes
