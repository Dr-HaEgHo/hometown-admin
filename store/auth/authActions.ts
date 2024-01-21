import { baseUrl } from "@/config";
import { createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "@reduxjs/toolkit/query";
import axios from "axios";

// const baseUrl = process.env.BASE_URL

// ================================================================= AUTHENTICATE ADMIN USER
export const authenticateAdminUser = createAsyncThunk(
    "authenticateAdminUser",
    async ({ email, password }: { email: string, password: string }, { rejectWithValue, getState, dispatch }) => {
        try {
            const res = await axios.post(`${baseUrl}/admin/login/`, {
                email, password
            },
                {
                    headers: {
                        "Content-Type": "application/json",
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

