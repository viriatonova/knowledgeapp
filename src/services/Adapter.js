import React from "react";
import QuestionsList from "../components/QuestionsList";
import Container from '@mui/material/Container';

// Api 
const baseURL = "https://opentdb.com/api.php?amount=";
export default baseURL;

// Maping Questions
export function Adapter() {
    const apiResult = JSON.parse(localStorage.getItem('api'));
    return (
        <Container maxWidth="xl">
            
            { apiResult?.map((item, index) => (
                <QuestionsList 
                key={index
                }
                category = {item.category}
                question = {item.question}
                answers = {item.incorrect_answers}
                />
            ))} 

        </Container>
    );
}

