import { axiosAuth } from '../api/interceptors';
import { getPassingTestUrl } from '@/config/api.config';

export const PassingTestService = {
  async startTest(testId: string) {
    const response = await axiosAuth.post<string>(
      getPassingTestUrl(`/start/${testId}`)
    );
    return response.data;
  }
};
