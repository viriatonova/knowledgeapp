import React from 'react'

export default function QuestionsList({category, question }) {


    return (
        <>     
            <h2>{category}</h2>
            <p>{question}</p>
        </>
    );
}

