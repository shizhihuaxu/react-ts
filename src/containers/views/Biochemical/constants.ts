export interface IType {
	id: string
	name: string
	key?: string
	isSelect?: boolean
	children?: IType[]
}

export const biochemicalType: IType[] = [
	{
		id: '1',
		name: '乙肝三系+DNA',
		isSelect: false,
		children: [
			{
				id: 'all',
				name: '全部',
				isSelect: true
			},
			{
				id: '1-2',
				name: 'HBV+DNA',
				key: 'hbv',
				isSelect: false
			}
		]
	},
	{
		id: '2',
		name: '肝肾脂糖',
		isSelect: false,
		children: [
			{
				id: 'all',
				name: '全部',
				isSelect: true
			},
			{
				id: '1-2',
				name: 'HBV+DNA',
				isSelect: false
			}
		]
	},
	{
		id: '3',
		name: '肝肾脂糖',
		isSelect: false,
		children: [
			{
				id: 'all',
				name: '全部',
				isSelect: true
			},
			{
				id: '1-2',
				name: '总蛋白',
				key: 'total_protein',
				isSelect: false
			}
		]
	},
	{
		id: '3',
		name: '血常规',
		isSelect: false,
		children: [
			{
				id: 'all',
				name: '全部',
				isSelect: true
			},
			{
				id: '1-2',
				name: '总蛋白',
				key: 'total_protein',
				isSelect: false
			}
		]
	}
]
