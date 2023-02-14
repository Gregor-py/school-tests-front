import { FC, useState } from 'react'
import styles from './EditTest.module.scss'

const EditTestBlock: FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const [isFocus, setIsFocus] = useState(false)

	return (
		<div className={styles.EditTestBlock}>
			{children}
		</div>
	)
}

export default EditTestBlock
