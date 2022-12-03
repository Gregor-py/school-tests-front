import { IAuthResponse, ITokens } from '@/store/user/user.interface';
import Cookies from 'js-cookie';

export const saveTokensToStorage = (data: ITokens) => {
  Cookies.set('accessToken', data.accessToken);
  Cookies.set('refreshToken', data.refreshToken);
};

export const saveUserToStorage = (data: IAuthResponse) => {
  saveTokensToStorage(data);
  localStorage.setItem('user', JSON.stringify(data));
};

export const removeTokensFromStorage = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
};
