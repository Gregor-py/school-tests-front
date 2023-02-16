import EditTestInputLine from '@/components/ui/form-elements/edit-test-elements/EditTestInputLine'
import { useDebouncedMutation } from '@/hooks/useDebouncedMutation'
import { EditTaskService } from '@/services/task/edit-task.service'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import DeleteAnswerButton from './DeleteAnswerButton'
import styles from './EditTest.module.scss'

interface EditAnswerVariant {
	answerId: string
	taskId: string
	refetchTask: () => void
}
const EditAnswerVariant: FC<EditAnswerVariant> = ({ answerId, taskId, refetchTask }) => {
	const { data, isLoading, isSuccess } = useQuery(
		['get answer data for edit', answerId],
		() => EditTaskService.getAnswer(answerId),
		{
			select({ data }) {
				return data
			},
			onError(error) { }
		}
	)
	const [answerVariantInput, setAnswerVariantInput] = useState('')

	const { mutate: changeText } = useMutation('change answer text', (data: { answerId: string, newAnswerText: string }) => EditTaskService.changeAnswerText(data.answerId, data.newAnswerText))

	useDebouncedMutation(() => changeText({ newAnswerText: answerVariantInput, answerId }), 600, answerVariantInput)

	useEffect(() => {
		if (data) {
			setAnswerVariantInput(data.text)
		}
	}, [data])

	if (isLoading || !data) {
		return null
	}

	return (
		<div className={styles.editAnswerVariant}>
			<div className={styles.decor}></div>
			<EditTestInputLine
				onChange={(event: ChangeEvent<HTMLInputElement>) => setAnswerVariantInput(event.target.value)}
				value={answerVariantInput}
				sizeType={'h3'}
			/>
			<DeleteAnswerButton answerId={answerId} taskId={taskId} refetchTask={refetchTask} />
		</div>
	)
}

export default EditAnswerVariant