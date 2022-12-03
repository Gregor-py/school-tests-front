import axios from 'axios';
import { API_URL } from '@/config/api.config';
import { errorCatch, getContentType } from './api.helper';
import Cookies from 'js-cookie';
import { AuthService } from '@/services/auth/auth.service';
import { removeTokensFromStorage } from '@/services/auth/auth.helper';

export const axiosClassic = axios.create({
  baseURL: API_URL,
  headers: getContentType()
});

export const axiosAuth = axios.create({
  baseURL: API_URL,
  headers: getContentType()
});

axiosAuth.interceptors.request.use((config) => {
  const accessToken = Cookies.get('accessToken');

  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 ||
      (errorCatch(error) === 'Треба зареєструватися' &&
        error.config &&
        !error.config._isRetry)
    ) {
      originalRequest._isRetry = true;

      try {
        await AuthService.getNewTokens();
        return axiosAuth.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === 'Треба зареєструватися') {
          removeTokensFromStorage();
        }
      }
    }

    throw error;
  }
);
