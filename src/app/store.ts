import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import memberSlice from '../features/member/memberSlice';

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        member: memberSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
