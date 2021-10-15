import React from "react";
import Container from '@mui/material/Container';

// Api 
const baseURL = "https://opentdb.com/api.php?amount=";
export default baseURL;


const apiResult = JSON.parse(localStorage.getItem('api'));
export const totalQuestions = apiResult.length;

const categorys = []
const questions = []
const answers = []

apiResult.forEach(element => { categorys.push(element.category) });
apiResult.forEach(element => { questions.push(element.question) });
apiResult.forEach(element => { answers.push(element.incorrect_answers)});



export function Adapter({count}) {

    return (
        <Container maxWidth="xl">

            <h2>{`Questions ${count+1}`}</h2>
            <h2>{categorys[count]}</h2> 
            <h3>{questions[count]}</h3> 
            <p>{
                answers[count]
            }</p> 

        </Container>
    );
}

