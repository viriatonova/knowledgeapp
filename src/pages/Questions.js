import React, { useState } from "react";
import { Adapter } from "../services/Adapter";
import { totalQuestions } from "../services/Adapter";


export default function Questions() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Adapter count = {count}/>
            <button onClick={() => {if(count > 0 && count < totalQuestions ) {setCount(count - 1 )}}}>Preview Question</button>
            <button onClick={() => {if(count >= 0 && count < totalQuestions - 1 ) {setCount(count + 1 )}}}>Next Question</button>
        </>
       
    );
    
}