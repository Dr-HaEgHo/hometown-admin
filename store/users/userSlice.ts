import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { getAllUsers, getUserById } from "./userActions";

interface userState {
    loading: boolean,
    isLoggedIn: boolean,
    loginSuccess: boolean,
    users: [],
    singleUser: any

}

const initialState: userState = {
    loading: false, 
    isLoggedIn: false,
    loginSuccess: false,
    users: [],
    singleUser: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearLoginSuccess: (state) => {
            state.loginSuccess = false;
            console.log('cleared login success')
        },
    },
    extraReducers: (builder) => {

        // GET ALL USERS
        builder.addCase(getAllUsers.pending, (state, { payload }) => {
            state.loading = true;
        }),
        builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.users = payload?.data
        }),
        builder.addCase(getAllUsers.rejected, (state, { payload }) => {
            state.loading = false;
        }),


        // GET SINGLE USER DETAILS BY ID
        builder.addCase(getUserById.pending, (state, { payload }) => {
            state.loading = true;
        }),
        builder.addCase(getUserById.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.singleUser = payload?.data
        }),
        builder.addCase(getUserById.rejected, (state, { payload }) => {
            state.loading = false;
        })
    }

})

export const { } = userSlice.actions;

// export const selectAuth = (state: RootState) => state.counter.value

export default userSlice.reducer