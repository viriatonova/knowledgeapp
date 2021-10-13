import React from 'react'

export default function QuestionsList({category, question, answers }) {


    return (
        <>     
            <h2>{category}</h2>
            <p>{question}</p>
            <p>{answers}</p>
        </>
    );
}

