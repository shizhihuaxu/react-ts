// 菜单列表
export interface IMenu {
    icon?: string
    title: string
    path: string
    children?: Array<IMenu>
}

export const menu: IMenu[] = [
    // {
    //     icon: 'bl-icon-log',
    //     path: '/',
    //     title: 'bio'
    // },
    {
        icon: 'bl-icon-list',
        path: '/test:id',
        title: 'test'
    }
]

export default menu
