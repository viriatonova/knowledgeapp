import React, { useState } from 'react'

export default function QuestionsList() {
    const [ count, setCount ] = useState(0);
    const questions = localStorage.getItem("api");

    return (
        <>
     
            { questions?.map((item) => (
                key={item.id}
                id={item.id}
                questions={item.question}
            ))}  
              
        </>
    );
}

