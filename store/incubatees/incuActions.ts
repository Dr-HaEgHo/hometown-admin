import { baseUrl } from "@/config";
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { RootState } from "../store";

// const baseUrl = process.env.BASE_URL

// ================================================================= ADD NEW INCUBATEE
export const addNewIncubatee = createAsyncThunk(
    "addNewIncubatee",
    async ({ email, password }: { email: string, password: string }, { rejectWithValue, getState }) => {
        const { auth} = getState() as RootState
        try {
            const res = await axios.post(`${baseUrl}/register/agent/`, {
                email,
                password
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": auth?.accesstoken
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



// ================================================================= GET ALL INCUBATEES
export const getAllIncubatees = createAsyncThunk(
    "getAllIncubatees",
    async (_, { rejectWithValue, getState }) => {
        const { auth } = getState() as RootState;

        try {
            const res = await axios.get(`${baseUrl}/dashboard/agents/`,
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



// ================================================================= GET ALL INCUBATEES
export const getIncubateeById = createAsyncThunk(
    "getIncubateeById",
    async ({ agentId }: { agentId: string}, { rejectWithValue, getState }) => {
        const { auth } = getState() as RootState;

        try {
            const res = await axios.get(`${baseUrl}/dashboard/agents/${agentId}/`,
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
