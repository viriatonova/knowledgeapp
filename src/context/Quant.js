import React, { createContext, useState } from "react";

export const QuantContext = createContext(); 
    const [quant, sentQuant] = useState(''); 

export default functions QuantProvider( { children }) {
    return (
        <QuantContext.Provider value={{
            quant,
            sentQuant,
        }}>
            { children }
        </QuantContext.Provider>
    );

}

export function useQuant() {
    
}
