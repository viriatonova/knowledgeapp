import { createContext, useState, useContext} from "react";

export const QuantContext = createContext();

export default function QuantProvider({ children }) {
    const [quant, setQuant] = useState("");

    return (
        <QuantContext.Provider
        value={{
            quant,
            setQuant,
        }}
        >
        { children }
        </QuantContext.Provider>
    );
}

export function useQuant() {
    const context = useContext(QuantContext);
    const { quant, setQuant } = context;
    return {quant, setQuant };
}
