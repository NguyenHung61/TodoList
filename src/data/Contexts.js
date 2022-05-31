import { createContext, useEffect, useState } from "react";
import { createApiClient } from "../api/api";


export const Context = createContext();

export const ContextProvider = ({ children }) => {
    
    const token = JSON.parse(localStorage.getItem("Token"));
    const [state, setState] = useState(null);
    const [info, setInfo] = useState(null);
    useEffect( async() => {
        // if (data === null || data === []) {
        //     setState(null);
        // }
        // else {
        //     setState(data)
        // }
        const datas = await createApiClient().get("/todo",{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setState(datas.data);
    },[])
    
    const values = {
        state,
        setState,
        info,
        setInfo,
        token,
        
    }
    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

