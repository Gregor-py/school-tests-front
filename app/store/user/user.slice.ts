import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from '@/store/user/user.interface';
import { getStoreLocal } from '@/utils/local-storage';
import { checkAuth, login, logout, register } from '@/store/user/user.actions';

const initialState: IInitialState = {
  user: getStoreLocal('user'),
  isLoading: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      });

    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      });

    builder.addCase(logout.fulfilled, (state) => {
      state.isLoading = false;
      state.user = null;
    });

    builder.addCase(checkAuth.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.user;
    });
  }
});

export const { reducer: userReducer } = userSlice;
