import EditTestBlock from '@/components/ui/form-elements/edit-test-elements/EditTestBlock'
import EditTestInputLine from '@/components/ui/form-elements/edit-test-elements/EditTestInputLine'
import { useDebouncedMutation } from '@/hooks/useDebouncedMutation'
import { EditTaskService } from '@/services/task/edit-task.service'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import AddAnswerVariantButton from './AddAnswerVariantButton'

const EditTask: FC<{ taskId: string }> = ({ taskId }) => {
	const { data, isLoading, refetch, isSuccess } = useQuery(
		['get task data for edit', taskId],
		() => EditTaskService.getTaskById(taskId),
		{
			select({ data }) {
				return data
			},
			onError(error) { }
		}
	)
	const [questionInput, setQuestionInput] = useState('')
	const { mutate: changeQuestion } = useMutation('change task question', (data: { taskId: string, newQuestion: string }) => EditTaskService.changeTaskQuestion(data.taskId, data.newQuestion))

	useDebouncedMutation(() => changeQuestion({ newQuestion: questionInput, taskId }), 600, questionInput)

	useEffect(() => {
		if (data) {
			setQuestionInput(data.question)
		}
	}, [data])

	if (isLoading || !data) {
		return null
	}
	return <EditTestBlock>
		<div className=''>
			<EditTestInputLine
				onChange={(event: ChangeEvent<HTMLInputElement>) => setQuestionInput(event.target.value)}
				value={questionInput ? questionInput : ''}
				sizeType="h2"
			/>

			{data.answerVariants.map(answer => <div key={answer}>{answer}</div>)}

			<AddAnswerVariantButton refetch={() => refetch()} taskId={taskId} />
		</div>
	</EditTestBlock>
}

export default EditTask