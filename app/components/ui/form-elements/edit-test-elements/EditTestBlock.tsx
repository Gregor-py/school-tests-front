import classNames from 'classnames'
import { FC, useState } from 'react'
import styles from './EditTest.module.scss'

interface EditTestBlock { children: React.ReactNode, className?: string }

const EditTestBlock: FC<EditTestBlock> = ({
	children,
	className = ''
}) => {
	const [isFocus, setIsFocus] = useState(false)

	return (
		<div className={classNames(styles.EditTestBlock, className)}>
			{children}
		</div>
	)
}

export default EditTestBlock
