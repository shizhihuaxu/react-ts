import React, { useState } from 'react'
import classnames from 'classnames'
import { Table } from 'antd'
import { useOnMount } from '@scripts/utils/hook'
import { biochemicalType, IType } from './constants'
import styles from './index.module.scss'

const Biochemical: React.FC = () => {
    // 初始化列表
    const columns: any = []
    function initTableColumns() {
        biochemicalType.forEach(category => {
            const { name, children } = category

            const obj: { [k: string]: any } = {
                title: name,
                children: [],
            }

            if (children) {
                children.forEach(type => {
                    type.key &&
                        obj.children.push({
                            title: type.name,
                            key: type.key,
                            dataIndex: type.key,
                        })
                })
            }

            columns.push(obj)
        })

        // 操作列
        columns.push({
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            fixed: 'right',
            render: () => <a>查看</a>,
        })
        // 时间列
        columns.unshift({
            title: '时间',
            dataIndex: 'time',
            key: 'time',
            fixed: 'left',
        })
    }

    initTableColumns()

    const [biochemicalList, setBiochemicalList] = useState<IType[]>([])
    const [tableColumns] = useState(columns)
    const [tableList] = useState([
        {
            key: 1,
            hbv_dna_1: 1,
            hbv_dna_2: 2,
            test_1: 88,
            test_2: 99,
            total_protein_1: 3,
            total_protein_2: 44,
            time: '2021-12-12: 10:11:22',
        },
    ])

    function changeTableColumns(type: IType) {
        type.isSelect = true
    }

    useOnMount(() => {
        setBiochemicalList(biochemicalType)
    })

    return (
        <div>
            {/* 操作 */}
            <div className={styles.list}>
                {biochemicalList.map(parent => {
                    return (
                        <div
                            key={parent.id}
                            className={styles.category}>
                            <span className={styles.categoryName}>{parent.name}</span>
                            <span className={styles.type}>
                                {parent.children &&
                                    parent.children.map(child => {
                                        return (
                                            <span
                                                key={child.id}
                                                className={classnames({
                                                    [styles.typeName]: true,
                                                    [styles.active]: child.isSelect,
                                                })}
                                                onClick={() => changeTableColumns(child)}
                                            >
                                                {child.name}
                                            </span>
                                        )
                                    })}
                            </span>
                        </div>
                    )
                })}
            </div>
            {/* 列表 */}
            <Table
                className={styles.table}
                dataSource={tableList}
                columns={tableColumns}
                scroll={{ x: 1500, y: 300 }}
                bordered={true} />
        </div>
    )
}

export default Biochemical
