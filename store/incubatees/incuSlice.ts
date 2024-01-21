import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { addNewIncubatee, getAllIncubatees, getIncubateeById } from "./incuActions";

interface IncuState {
    loading: boolean,
    loadingNewUser: boolean,
    loadingSingleUser: boolean,
    isLoggedIn: boolean,
    loginSuccess: boolean,
    incubatees: [],
    singleIncubatee: any
}

const initialState: IncuState = {
    loading: false,
    loadingNewUser: false,
    loadingSingleUser: false,
    isLoggedIn: false,
    loginSuccess: false,
    incubatees: [],
    singleIncubatee: {}
}

export const incuSlice = createSlice({
    name: 'incu',
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

        // ADD NEW INCUBATEE
        builder.addCase(addNewIncubatee.pending, (state, { payload }) => {
            state.loading = true;
        }),
            builder.addCase(addNewIncubatee.fulfilled, (state, { payload }) => {
                state.loading = false;
            }),
            builder.addCase(addNewIncubatee.rejected, (state, { payload }) => {
                state.loading = false;
            })


        // GET ALL INCUBATEES
        builder.addCase(getAllIncubatees.pending, (state, { payload }) => {
            state.loading = true;
        }),
            builder.addCase(getAllIncubatees.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.incubatees = payload?.data
            }),
            builder.addCase(getAllIncubatees.rejected, (state, { payload }) => {
                state.loading = false;
            })



        // GET INCUBATEE BY ID
        builder.addCase(getIncubateeById.pending, (state, { payload }) => {
            state.loading = true;
        }),
            builder.addCase(getIncubateeById.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.singleIncubatee = payload?.data
            }),
            builder.addCase(getIncubateeById.rejected, (state, { payload }) => {
                state.loading = false;
            })
    }

})

export const { } = incuSlice.actions;

// export const selectincu = (state: RootState) => state.counter.value

export default incuSlice.reducer