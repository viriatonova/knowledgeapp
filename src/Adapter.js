import React, { useState, useEffect } from 'react';
import axios from 'axios';


const baseURL = "https://opentdb.com/api.php?amount="


export default function Adapter () {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get(`${baseURL}1`).then((response) => {
            setQuestions(response.data);
        });
    }, []);


    if (!questions) return "Erro"

    


    return (
        <>{
            questions.map((i) =>
            <div>{ i.results }</div>
            )
            
        }</>
    );
}
