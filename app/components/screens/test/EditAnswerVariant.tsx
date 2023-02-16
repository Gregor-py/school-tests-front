import EditTestInputLine from '@/components/ui/form-elements/edit-test-elements/EditTestInputLine'
import { MaterialIcon } from '@/components/ui/icons/MaterialIcon'
import { ChangeEvent, FC, useState } from 'react'
import styles from './EditAnswerVariant.module.scss'

interface EditAnswerVariant {

}
const EditAnswerVariant: FC<EditAnswerVariant> = () => {
	const [answerVariantInput, setAnswerVariantInput] = useState('')


	return (
		<div className={styles.editAnswerVariant}>
			<div className={styles.decor}></div>
			<EditTestInputLine
				onChange={(event: ChangeEvent<HTMLInputElement>) => setAnswerVariantInput(event.target.value)}
				value={answerVariantInput}
				sizeType={'h3'}
			/>
			<button className={styles.deleteButton}>
				<MaterialIcon name='MdDeleteOutline' />
			</button>
		</div>
	)
}

export default EditAnswerVariant