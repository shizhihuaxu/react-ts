// 菜单列表
export interface IMenu {
    icon?: string
    title: string
    path: string
    children?: IMenu[]
}

export const menus: IMenu[] = [
    {
        icon: 'bl-icon-log',
        path: '/bio',
        title: 'bio'
    },
    {
        icon: 'bl-icon-list',
        path: '/test/1',
        title: 'test'
    }
]

export default menus
