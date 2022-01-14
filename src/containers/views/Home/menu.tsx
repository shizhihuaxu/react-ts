import React from 'react'
import loadable from '@loadable/component'
import PageLoading from '@/components/PageLoading'

// 路由懒加载组件
const lazyLoadComponent = (loader: () => Promise<any>) => loadable(loader, { fallback: <PageLoading /> })
export const asyncComponents = {
    Biochemical: lazyLoadComponent(() => import(/* webpackChunkName: "Biochemical" */ '@containers/views/Biochemical'))
}

export type AsyncComponentKeys = keyof typeof asyncComponents

export interface IMenu {
    id: number
    pid?: number
    icon?: string
    title: string
    path: string
    component: AsyncComponentKeys
}

export interface IMenuTree extends IMenu {
    children?: []
}

export const menu: IMenu[] = [
    {
        id: 1,
        path: '/',
        title: 'bio',
        component: 'Biochemical'
    }
]

export default menu
