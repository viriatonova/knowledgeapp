import React, { createContext, useState } from "react";

export const QuantContext = createContext();

export default function QuantProvider({ children }) {

    const [quant, setQuant] = useState(0);

    return (

        <QuantContext.Provider value={{quant, setQuant}}> 
        
            { children }

        </QuantContext.Provider>

    );
}
