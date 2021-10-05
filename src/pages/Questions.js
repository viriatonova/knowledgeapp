import React, { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import { useQuant } from "../context/Quant";
import axios from "axios";

const baseURL = "https://opentdb.com/api.php?amount=";

export default function Questions() {
    const [questions, setQuestions] = useState([]);
    const { quant } = useQuant();

    useEffect(() => {
        axios.get(`${baseURL}${quant}`).then((response) => {
            setQuestions(response.data);
        });
        console.log(questions);
        console.log(quant);
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