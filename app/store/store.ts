import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducers } from '@/store/rootReducer';

export const store = configureStore({
  reducer: combineReducers(reducers),
  devTools: true
});

export type TypeRootState = ReturnType<typeof store.getState>;
