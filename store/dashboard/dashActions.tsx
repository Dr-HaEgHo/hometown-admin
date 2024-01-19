import { baseUrl } from "@/config";
import { loginDetails } from "@/types/types";
import { Store, createAsyncThunk } from "@reduxjs/toolkit"

import axios from "axios";
import { AppDispatch, RootState } from "../store";

// const baseUrl = process.env.BASE_URL

// ================================================================= AUTHENTICATE ADMIN USER
export const getDashCounts = createAsyncThunk(
    "getDashCounts",
    async (_, {rejectWithValue, getState}) => {
        const { auth } = getState() as RootState;
        console.log(auth.accesstoken, "access res")

        try {
            const res = await axios.get(`${baseUrl}/dashboard/get_counts/`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer  ${auth.accesstoken}`,
                    }
                }
            );
            if (res.status === 200 || res.status === 201) {
                console.log(res, "the res")
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

