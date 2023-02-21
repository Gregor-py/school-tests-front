import { ITest } from '@/shared/types/test.types';
import { axiosAuth } from '../../api/interceptors';
import { getTestUrl } from '@/config/api.config';

export const TestService = {
  async getCreated() {
    return axiosAuth.get<ITest[]>(getTestUrl('/created'));
  },
  async create() {
    return axiosAuth.post<ITest>(getTestUrl(``));
  }
};
