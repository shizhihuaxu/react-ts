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
                key: 'hbv_dna_1',
                isSelect: false
            },
            {
                id: '1-3',
                name: 'test',
                key: 'test_1',
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
                id: '2-2',
                name: 'HBV+DNA',
                key: 'hbv_dna_2',
                isSelect: false
            },
            {
                id: '2-3',
                name: 'test',
                key: 'test_2',
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
                id: '3-2',
                name: '总蛋白',
                key: 'total_protein_1',
                isSelect: false
            }
        ]
    },
    {
        id: '4',
        name: '血常规',
        isSelect: false,
        children: [
            {
                id: 'all',
                name: '全部',
                isSelect: true
            },
            {
                id: '4-2',
                name: '总蛋白',
                key: 'total_protein_2',
                isSelect: false
            }
        ]
    }
]
