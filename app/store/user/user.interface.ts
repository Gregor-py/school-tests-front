import { IUser } from '@/shared/types/user.types';

export interface IUserState {
  email: string;
  isAdmin: boolean;
}

export interface ITokens {
  refreshToken: string;
  accessToken: string;
}

export interface IInitialState {
  user: IUserState | null;
  isLoading: boolean;
}

export interface IRegisterData {
  email: string;
  password: string;
  name: string;
  schoolClass: number;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IAuthResponse extends ITokens {
  user: IUser & {
    isAdmin: boolean;
  };
}
