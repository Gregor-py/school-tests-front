import { getAnswerUrl, getTaskUrl, getTestUrl } from '@/config/api.config'
import { IAnswer, ITask } from '@/shared/types/test.types'
import { axiosAuth } from 'api/interceptors'

export const EditTaskService = {
	async getTaskById(taskId: string) {
		return axiosAuth.get<ITask>(getTaskUrl(`/${taskId}`))
	},
	async changeTaskQuestion(taskId: string, newQuestion: string) {
		return axiosAuth.put<ITask>(getTaskUrl(`/question/${taskId}`), { newQuestion: newQuestion })
	},
	async addAnswer(taskId: string) {
		return axiosAuth.post<string>(getTaskUrl(`/answer/${taskId}`))
	},
	async getAnswer(answerId: string) {
		return axiosAuth.get<IAnswer>(getAnswerUrl(`/${answerId}`))
	},
	async changeAnswerText(answerId: string, newAnswerText: string) {
		return axiosAuth.put<IAnswer>(getAnswerUrl(`/${answerId}`), { newAnswerText })
	},
	async changeCorrectAnswer(taskId: string, newCorrectAnswerId: string) {
		return axiosAuth.put<ITask>(getTaskUrl(`/correct-answer/${taskId}`), { newCorrectAnswerId })
	},
	async deleteAnswer(answerId: string, taskId: string) {
		return axiosAuth.put<string>(getTaskUrl(`/answer/${taskId}`), { answerId: answerId })
	},
	async deleteTask(taskId: string, testId: string) {
		return axiosAuth.put<string>(getTestUrl(`/task-delete/${testId}`), { taskId: taskId })
	}
}