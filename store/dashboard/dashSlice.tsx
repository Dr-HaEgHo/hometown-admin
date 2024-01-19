import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { getDashCounts } from "./dashActions";

interface dashState {
    loading: boolean,
    counts: any
}

const initialState: dashState = {
    loading: false,
    counts: {}
}

export const dashSlice = createSlice({
    name: 'dash',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getDashCounts.pending, (state, { payload }) => {
            state.loading = true;
        }),
            builder.addCase(getDashCounts.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.counts = payload?.data
            }),
            builder.addCase(getDashCounts.rejected, (state, { payload }) => {
                state.loading = false;
            })
    }

})

export const {  } = dashSlice.actions;

// export const selectAuth = (state: RootState) => state.counter.value

export default dashSlice.reducer