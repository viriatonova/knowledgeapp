import React, { createContext, useState, useContext} from "react";

export const QuantContext = createContext(); 

export default function QuantProvider( { children } ) {
    const {quant, setQuant} = useState(5); 

    return (
        <QuantContext.Provider value={{
            quant,
            setQuant,
        }}>
            { children }
        </QuantContext.Provider>
    );

}

export function useQuant() {
    const context = useContext(QuantContext);
    const { quant, setQuant } = context;
    return { quant, setQuant };
}
