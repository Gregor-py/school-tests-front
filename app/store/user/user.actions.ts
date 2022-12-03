import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  IAuthResponse,
  ILoginData,
  IRegisterData
} from '@/store/user/user.interface';
import { AuthService } from '@/services/auth/auth.service';
import { toast } from 'react-toastify';
import { toastError } from '@/utils/toast-error';
import { errorCatch } from '../../api/api.helper';

export const register = createAsyncThunk<IAuthResponse, IRegisterData>(
  'auth/register',
  async ({ email, password, name, schoolClass }, thunkApi) => {
    try {
      const response = await AuthService.register(
        email,
        password,
        schoolClass,
        name
      );

      toast('Ви успішно зареєструвалися', {
        hideProgressBar: false,
        autoClose: 2000,
        type: 'success'
      });
      return response.data;
    } catch (error) {
      toastError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk<IAuthResponse, ILoginData>(
  'auth/login',
  async ({ email, password }, thunkApi) => {
    try {
      const response = await AuthService.login(email, password);

      toast('Ви успішно ввійшли в аккаунт', {
        hideProgressBar: false,
        autoClose: 2000,
        type: 'success'
      });
      return response.data;
    } catch (error) {
      toastError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', () => {
  AuthService.logout();
});

export const checkAuth = createAsyncThunk(
  'auth/check-auth',
  async (_, thunkAPI) => {
    try {
      const response = await AuthService.getNewTokens();
      return response.data;
    } catch (error) {
      if (errorCatch(error) === 'Треба зареєструватися') {
        thunkAPI.dispatch(logout());
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);
