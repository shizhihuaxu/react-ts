import React from 'react'
import Loadable from '@loadable/component'
import PageLoading from '@/components/PageLoading'

// 路由懒加载组件
const lazyLoadComponent = (loader: () => Promise<any>) => Loadable(loader, { fallback: <PageLoading /> })
export interface IRoute {
    key: string // 标识路由唯一性的名称
    path: string
    element: any // TODO 如何写为懒加载的组件的类型
    isIndex?: boolean // 标识是否为默认子路由
    children?: Array<IRoute> // 子路由
}

export const routes: IRoute[] = [
    // {
    //     key: 'index',
    //     path: '/',
    //     element: lazyLoadComponent(() => import('@containers/views/Biochemical'))
    // },
    {
        key: 'test',
        path: 'test:id',
        element: lazyLoadComponent(() => import('@containers/views/Test')),
        isIndex: true
    }
]

export default routes
