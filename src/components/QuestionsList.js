import React, { useContext, useState, useEffect } from 'react'
import { QuantContext } from '../context/QuantContext';
import axios from 'axios';
import baseURL from '../services/Api';


export default function QuestionsList() {
    const { quant } = useContext(QuantContext);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get(`${baseURL}${quant}`).then(({ data }) => {
            setQuestions(data.results);
        });
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(questions)
    console.log(quant)



   // localStorage.setItem("app", apiResults);
  

    return (
        <>
            { questions?.map((results) => (
                <results 
                    key={results.question}
                />
            ))}
        </>
    )
}

