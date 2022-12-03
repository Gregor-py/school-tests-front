import { axiosClassic } from '../../api/interceptors';
import { IAuthResponse } from '@/store/user/user.interface';
import { getAuthUrl } from '@/config/api.config';
import {
  removeTokensFromStorage,
  saveUserToStorage
} from '@/services/auth/auth.helper';
import Cookies from 'js-cookie';
import { getContentType } from '../../api/api.helper';

export const AuthService = {
  async register(
    email: string,
    password: string,
    schoolClass: number,
    name: string
  ) {
    const response = await axiosClassic.post<IAuthResponse>(
      getAuthUrl('/register'),
      { email, password, name, class: schoolClass }
    );

    if (response.data.accessToken) {
      saveUserToStorage(response.data);
    }

    return response;
  },
  async login(email: string, password: string) {
    const response = await axiosClassic.post<IAuthResponse>(
      getAuthUrl('/login'),
      { email, password }
    );

    if (response.data.accessToken) {
      saveUserToStorage(response.data);
    }

    return response;
  },
  logout() {
    removeTokensFromStorage();
    localStorage.removeItem('user');
  },
  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken');
    return await axiosClassic.post<IAuthResponse>(
      getAuthUrl('/login/access-token'),
      { refreshToken },
      { headers: getContentType() }
    );
  }
};
