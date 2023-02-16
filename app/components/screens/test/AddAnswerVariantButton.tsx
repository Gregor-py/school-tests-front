import { EditTaskService } from '@/services/task/edit-task.service'
import { FC } from 'react'
import { useMutation } from 'react-query'
import styles from './EditTest.module.scss'

interface AddAnswerVariantButton {
	refetch: () => void
	taskId: string
}

const AddAnswerVariantButton: FC<AddAnswerVariantButton> = ({ refetch, taskId }) => {
	const { mutate: addAnswer } = useMutation('add answer to task', (taskId: string) => EditTaskService.addAnswer(taskId))

	const handleClick = async () => {
		await addAnswer(taskId)
		refetch()
	}

	return (
		<button onClick={handleClick} className={styles.AddAnswerVariantButton}>
			<div className={styles.decor}></div>
			<div className={styles.AddAnswerVariantButtonText}>
				Додати варіант
			</div>
		</button>
	)
}

export default AddAnswerVariantButton