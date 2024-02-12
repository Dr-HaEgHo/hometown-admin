'use client'
import { fetchType } from "@/types/types";
import axios from "axios";
import { FC, useEffect, useState } from "react";

export const useFetch = ({ method, url, headers }: { method: string, url: string, headers: {}} ) => {

    const [response, setResponse] = useState<{}>({})
    
    const options = { method, url, headers };

    const makeFetchRequest = async() => {
        try {
            const response = await axios.request(options);
            console.log(response.data);
            
        } catch (error) {
            console.error(error);
        }

    }



    useEffect(() => { 
        makeFetchRequest();
    },[])

    return response
}


// headers: {
//     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//         'X-RapidAPI-Host': 'nigeria-states-and-lga.p.rapidapi.com'
// }

