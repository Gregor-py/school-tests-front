import { EditTaskService } from '@/services/task/edit-task.service'
import { FC, useEffect } from 'react'
import { useMutation } from 'react-query'
import styles from './EditTest.module.scss'

interface AddAnswerVariantButton {
	refetch: () => void
	taskId: string
}

const AddAnswerVariantButton: FC<AddAnswerVariantButton> = ({ refetch, taskId }) => {
	const { mutate: addAnswer, isSuccess } = useMutation('add answer to task', (taskId: string) => EditTaskService.addAnswer(taskId))

	const handleClick = async () => {
		addAnswer(taskId)
	}

	useEffect(() => {
		if (isSuccess) {
			refetch()
		}
	}, [isSuccess, refetch])

	return (
		<button onClick={() => handleClick()} className={styles.AddAnswerVariantButton}>
			<div className={styles.decor}></div>
			<div className={styles.AddAnswerVariantButtonText}>
				Додати варіант
			</div>
		</button>
	)
}

export default AddAnswerVariantButton