import React, { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import axios from "axios";

const baseURL = "https://opentdb.com/api.php?amount=";
const quantQuestions = 2;

export default function Questions() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get(`${baseURL}${quantQuestions}`).then((response) => {
            setQuestions(response.data);
        });
        console.log(questions);

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const apiResults = questions.results
    // console.log(apiResults);


    // localStorage.setItem("app", apiResults);
   
    return (
        <Container maxWidth="xl">

        </Container>
    );
    
}