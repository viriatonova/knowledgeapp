import React, { createContext, useContext } from "react";
import { useAxios } from "use-axios-client";


const AdaptContext = createContext();


export default function AdaptPorovider ({ children }) {
    //const quantQuestions = 1 
    const { data, error, loading } = useAxios({
        url: "https://opentdb.com/api.php?amount=1"
      });

    return (
        <AdaptContext.Provider value = {{
            data,
            error,
            loading
            //quantQuestions
        }}>
            { children }
        </AdaptContext.Provider>
    )
}

export function useAdapt () {
    const context = useContext(AdaptContext);
    const { data, error, loading } = context;
    return { data, error, loading };
}