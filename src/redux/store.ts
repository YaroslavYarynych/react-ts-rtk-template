import { configureStore } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';

export interface RootState {}

export const store = configureStore({
  reducer: {},
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useReducer;
