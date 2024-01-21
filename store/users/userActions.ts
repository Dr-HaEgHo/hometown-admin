import { baseUrl } from "@/config";
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { RootState } from "../store";

// const baseUrl = process.env.BASE_URL

// ================================================================= AUTHENTICATE ADMIN USER
export const getAllUsers = createAsyncThunk(
    "getAllUsers",
    async (_, { rejectWithValue, getState }) => {
        const { auth } = getState() as RootState;
        
        try {
            const res = await axios.get(`${baseUrl}/dashboard/get_users/`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer  ${auth.accesstoken}`,
                    }
                } 
            )
            if (res.status === 200 || res.status === 201) {
                return res;
            }
        } catch (err: any) {
            console.log(err);

            if (err.response.status === 400) {
                return rejectWithValue(err.response);
            } else {
                return rejectWithValue(err.response);
            }

            // return rejectWithValue(err);
        }
    }
);







// ================================================================= AUTHENTICATE ADMIN USER
export const getUserById = createAsyncThunk(
    "getUserById",
    async ({ userId}: { userId: string}, { rejectWithValue, getState }) => {
        const { auth } = getState() as RootState;
        
        try {
            const res = await axios.get(`${baseUrl}/dashboard/get_users/${userId}/`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer  ${auth.accesstoken}`,
                    }
                }
            );
            if (res.status === 200 || res.status === 201) {
                return res;
            }
        } catch (err: any) {
            console.log(err);

            if (err.response.status === 400) {
                return rejectWithValue(err.response);
            } else {
                return rejectWithValue(err.response);
            }

            // return rejectWithValue(err);
        }
    }
);

