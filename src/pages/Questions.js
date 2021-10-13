import React, { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import QuestionsList from "../components/QuestionsList";



export default function Questions() {
    // const [ questions, setQuestions ] = useState([]);
    const apiResult = JSON.parse(localStorage.getItem('api'));

    // useEffect(() => {
    //     setQuestions(apiResult)

    //      //eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // console.log(questions);


    return (
        <Container maxWidth="xl">
            
            { apiResult?.map((item, index) => (
                <QuestionsList 
                key={index
                }
                category = {item.category}
                question = {item.question}
                />
            ))} 

        </Container>
    );
    
}