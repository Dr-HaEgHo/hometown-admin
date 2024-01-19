import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice';
import dashReducer from './dashboard/dashSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        dash: dashReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
