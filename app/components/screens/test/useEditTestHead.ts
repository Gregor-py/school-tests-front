import { EditTestService } from '@/services/test/edit-test.service'
import { useMutation } from 'react-query'

export const useEditTestHead = () => {
	const {mutate: changeTitle} = useMutation('change test title', (data: {testId: string, newTitle: string}) => EditTestService.changeTitle(data.testId, data.newTitle))

	const {mutate: changeDescription} = useMutation('change test description', (data: {testId: string, description: string}) => EditTestService.changeDescription(data.testId, data.description))
	
	return {changeTitle, changeDescription}
}