import { axiosAuth } from '../api/interceptors';
import { getUserUrl } from '@/config/api.config';

export const UserService = {
  async changeName(name: string) {
    return axiosAuth.put(getUserUrl(`/customize`), { name });
  },
  async changeSecondName(secondName: string) {
    return axiosAuth.put(getUserUrl(`/customize`), { secondName });
  }
};
