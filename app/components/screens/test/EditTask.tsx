import EditTestBlock from '@/components/ui/form-elements/edit-test-elements/EditTestBlock'
import EditTestInputLine from '@/components/ui/form-elements/edit-test-elements/EditTestInputLine'
import { useDebouncedMutation } from '@/hooks/useDebouncedMutation'
import { EditTaskService } from '@/services/task/edit-task.service'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import AddAnswerVariantButton from './AddAnswerVariantButton'
import DeleteTaskButton from './DeleteTaskButton'
import EditAnswerVariant from './EditAnswerVariant'

const EditTask: FC<{ taskId: string, testId: string }> = ({ taskId, testId }) => {
	const { data, isLoading, refetch } = useQuery(
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
	const [correctAnswerId, setCorrectAnswerId] = useState<string>('')
	const { mutate: changeQuestion } = useMutation('change task question', (data: { taskId: string, newQuestion: string }) => EditTaskService.changeTaskQuestion(data.taskId, data.newQuestion))

	useDebouncedMutation(() => changeQuestion({ newQuestion: questionInput, taskId }), 600, questionInput)

	useEffect(() => {
		if (data) {
			setQuestionInput(data.question)
			setCorrectAnswerId(data.correctAnswer)
		}
	}, [data])

	if (isLoading || !data) {
		return null
	}
	return <EditTestBlock>
		<div className=''>
			<div className="flex">
				<EditTestInputLine
					onChange={(event: ChangeEvent<HTMLInputElement>) => setQuestionInput(event.target.value)}
					value={questionInput ? questionInput : ''}
					sizeType="h2"
				/>
				<DeleteTaskButton refetchTest={refetch} taskId={taskId} testId={testId} />
			</div>

			<div>
				{data.answerVariants.map(answer => <EditAnswerVariant
					setCorrectAnswerId={(newCorrectAnswerId) => setCorrectAnswerId(newCorrectAnswerId)}
					correctAnswerId={correctAnswerId}
					refetchTask={refetch}
					taskId={taskId}
					answerId={answer}
					key={answer}
				/>)}
			</div>

			<AddAnswerVariantButton refetch={() => refetch()} taskId={taskId} />
		</div>
	</EditTestBlock>
}

export default EditTask