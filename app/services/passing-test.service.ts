import { axiosAuth } from '../api/interceptors';
import { getPassingTestUrl } from '@/config/api.config';
import { IPassingTest, ITask } from '@/shared/types/test.types';

export const PassingTestService = {
  async startTest(testId: string) {
    const response = await axiosAuth.post<string>(getPassingTestUrl(`/start/${testId}`));
    return response.data;
  },
  async get(passingTestId: string) {
    return axiosAuth.get<IPassingTest>(getPassingTestUrl(`/${passingTestId}`));
  },
  async getNotPassedTasks(passingTestId: string) {
    return axiosAuth.get<ITask[]>(getPassingTestUrl(`/not-passed-tasks/${passingTestId}`));
  },
  async addPassedTask(passingTestId: string, taskId: string, chosenAnswer: string) {
    return axiosAuth.put(getPassingTestUrl(`/passed-task`), {
      passingTestId,
      taskId,
      chosenAnswer
    });
  },
  async finishTest(passingTestId: string) {
    return axiosAuth.put(getPassingTestUrl(`/finish/${passingTestId}`));
  }
};
