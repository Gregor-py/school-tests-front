import { getTaskUrl } from '@/config/api.config'
import { ITask } from '@/shared/types/test.types'
import { axiosAuth } from 'api/interceptors'

export const EditTaskService = {
	async getTaskById(taskId: string) {
		return axiosAuth.get<ITask>(getTaskUrl(`/${taskId}`))
	},
	async changeTaskQuestion(taskId: string, newQuestion: string) {
		return axiosAuth.put<ITask>(getTaskUrl(`/question/${taskId}`), { newQuestion: newQuestion })
	}
}