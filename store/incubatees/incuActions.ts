import { baseUrl } from "@/config";
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { RootState } from "../store";
import { toast } from "react-toastify";
import cogoToast from "cogo-toast";

// const baseUrl = process.env.BASE_URL

// ================================================================= ADD NEW INCUBATEE
export const addNewIncubatee = createAsyncThunk(
    "addNewIncubatee",
    async ({ firstName, lastName, email, phone, state, lga, base64Image }: { firstName: string, lastName: string, email: string, phone: string, state: string, lga: string, base64Image: string | null}, { rejectWithValue, getState }) => {
        const { auth} = getState() as RootState
        try {
            const res = await axios.post(`${baseUrl}/register/agent/`, {
                first_name: firstName,
                last_name: lastName,
                email,
                phone,
                state,
                lga,
                photo: base64Image
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": auth?.accesstoken
                    }
                } 
            )
            if (res.status === 200 || res.status === 201) {
                cogoToast.success("User Added Successfully")
                return res;
            }
        } catch (err: any) {
            console.log(err);
            
            cogoToast.error(err.response.data.email[0])
            if (err.response.status === 400) {
                cogoToast.error("An error occured, Try Again!")
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
