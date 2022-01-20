// 菜单列表
export interface IMenu {
    icon?: string
    title: string
    path: string
    children?: IMenu[]
}

export const menus: IMenu[] = [
    {
        icon: 'bl-icon-menu-log',
        path: '/bio',
        title: 'bio',
    },
    {
        icon: 'bl-icon-menu-list',
        path: '/test/1',
        title: 'test',
    },
]

export default menus
