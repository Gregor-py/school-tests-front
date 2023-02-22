import { axiosAuth } from '../api/interceptors';
import { getUserUrl } from '@/config/api.config';
import { IUser } from '@/shared/types/user.types';

export const UserService = {
  async changeName(name: string) {
    return axiosAuth.put(getUserUrl(`/customize`), { name });
  },
  async changeSecondName(secondName: string) {
    return axiosAuth.put(getUserUrl(`/customize`), { secondName });
  },
  async getCurrentUser() {
    return axiosAuth.get<IUser>(getUserUrl('/current'));
  }
};
