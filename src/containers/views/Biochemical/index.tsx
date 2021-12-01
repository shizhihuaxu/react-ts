import React, { useState } from 'react'
import classnames from 'classnames'
import { useOnMount } from '@scripts/utils/hook'
import { biochemicalType, IType } from './constants'
import styles from './index.module.scss'

const Biochemical: React.FC = () => {
	const [biochemicalList, setBiochemicalList] = useState<IType[]>([])
	const [tableColumns, setTableColumns] = useState([])

	function initTableColumns() {
		const columns: any = []

		biochemicalType.forEach(category => {
			const {name, children} = category

			const obj = {
				title: name,
				children: []
			}
		
			children && obj.children = children.map(type => {
				return {
					title: type.name,
					key: type.key
				}
			}
			

			columns.push(obj)
		})

		setTableColumns(columns)
	}

	function changeTableColumns(type: IType) {
		type.isSelect = true
	}

	useOnMount(() => {
		setBiochemicalList(biochemicalType)
	})

	return (
		<div className={styles.list}>
			{biochemicalList.map(parent => {
				return (
					<div key={parent.id} className={styles.category}>
						<span className={styles.categoryName}>{parent.name}</span>
						<span className={styles.type}>
							{parent.children &&
								parent.children.map(child => {
									return (
										<span
											key={child.id}
											className={classnames({
												[styles.typeName]: true,
												[styles.active]: child.isSelect
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
	)
}

export default Biochemical
