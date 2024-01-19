import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { authenticateAdminUser } from "./authActions";

interface AuthState{
    loading: boolean,
    isLoggedIn: boolean,
    loginSuccess: boolean,
    userDetails: {},
    accesstoken: string,
    requestToken: string,
}

const initialState: AuthState = {
    loading: false,
    isLoggedIn: false,
    loginSuccess: false,
    userDetails: {},
    accesstoken: "",
    requestToken: ""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearLoginSuccess: (state) => {
            state.loginSuccess = false;
            console.log('cleared login success')
        },
        logout: (state) => {
            state.loginSuccess = false;
            console.log('cleared login success')
        },
    },
    extraReducers: (builder) => {
        builder.addCase(authenticateAdminUser.pending, (state, { payload }) => {
            state.loading = true;
        }),
        builder.addCase(authenticateAdminUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.loginSuccess = true;
            state.userDetails = payload?.data
            state.accesstoken = payload?.data.access
        }),
        builder.addCase(authenticateAdminUser.rejected, (state, { payload }) => {
            state.loading = false;
        })
    }     
 
})

export const { clearLoginSuccess, logout } = authSlice.actions;

// export const selectAuth = (state: RootState) => state.counter.value

export default authSlice.reducer