import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { addNewIncubatee, assignNewLga, getAllIncubatees, getIncubateeById } from "./incuActions";

interface IncuState {
    loading: boolean,
    loadingNewUser: boolean,
    loadingSingleUser: boolean,
    loadingAssignNewAgent: boolean,
    isLoggedIn: boolean,
    loginSuccess: boolean,
    incubatees: [],
    singleIncubatee: any,
    newUserSuccess: boolean,
    isAssignTabOpen: boolean,
    assignSuccess: boolean
}

const initialState: IncuState = {
    loading: false,
    loadingNewUser: false,
    loadingSingleUser: false,
    loadingAssignNewAgent: false,
    isLoggedIn: false,
    loginSuccess: false,
    incubatees: [],
    singleIncubatee: {},
    newUserSuccess: false,
    isAssignTabOpen: false,
    assignSuccess: false
}

export const incuSlice = createSlice({
    name: 'incu',
    initialState,
    reducers: {
        clearNewUserSuccess: (state) => {
            state.newUserSuccess = false;
        },
        clearAssignSuccess: (state) => { 
            state.assignSuccess = false
        },
        logout: (state) => {
            state.loginSuccess = false;
            console.log('cleared login success')
        },
        toggleAssignTabOpen: (state) => {
            state.isAssignTabOpen = !state.isAssignTabOpen
        }
    },
    extraReducers: (builder) => {

        // ADD NEW INCUBATEE
        builder.addCase(addNewIncubatee.pending, (state, { payload }) => {
            state.loadingNewUser = true;
        }),
            builder.addCase(addNewIncubatee.fulfilled, (state, { payload }) => {
                state.loadingNewUser = false;
                state.newUserSuccess = true;
            }),
            builder.addCase(addNewIncubatee.rejected, (state, { payload }) => {
                state.loadingNewUser = false;
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



        // ASSIGN NEW AGENT LGA
        builder.addCase(assignNewLga.pending, (state, { payload }) => {
            state.loadingAssignNewAgent = true;
        }),
            builder.addCase(assignNewLga.fulfilled, (state, { payload }) => {
                state.loadingAssignNewAgent = false;
                state.assignSuccess = true;
            }),
            builder.addCase(assignNewLga.rejected, (state, { payload }) => {
                state.loadingAssignNewAgent = false;
            })
    }

})

export const { clearNewUserSuccess, toggleAssignTabOpen, clearAssignSuccess  } = incuSlice.actions;

// export const selectincu = (state: RootState) => state.counter.value

export default incuSlice.reducer