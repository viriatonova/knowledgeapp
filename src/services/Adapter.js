import React from "react";
import Container from '@mui/material/Container';
import { Controller, useForm } from "react-hook-form";
import { Button, FormControlLabel, RadioGroup,FormLabel } from "@mui/material";
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

// Api url
const baseURL = "https://opentdb.com/api.php?amount=";
export default baseURL;


const apiResult = JSON.parse(localStorage.getItem('api'));


export const totalQuestions = apiResult.length;
const categorys = []
const questions = []
const incorrect_answers = []
const correct_answers = []


apiResult.forEach(element => { categorys.push(element.category) });
apiResult.forEach(element => { questions.push(element.question) });
apiResult.forEach(element => { correct_answers.push(element.correct_answer)});
apiResult.forEach(element => { incorrect_answers.push(element.incorrect_answers)});



export function Adapter({count}) {
    const { control, handleSubmit } = useForm();

    return (
        <Container maxWidth="xl">
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: [300,500],
                marginLeft:[10,50],
                marginRight:[10,50],
            }}>

                <h2>{`Questions ${count+1}`}</h2>
                <h2>{categorys[count]}</h2> 
                <h3>{questions[count]}</h3> 
                
                <Controller
                    render = {({ field }) =>
                        <RadioGroup {...field} row aria-label="answers">
                            {incorrect_answers[count].map((item, index) => 
                            <FormControlLabel key={index} value={item} control={<Radio />} label={item}>
                                {item}
                            </FormControlLabel>)}
                            <FormControlLabel value={correct_answers[count]} control={<Radio />} label={correct_answers[count]}>
                                {correct_answers[count]}
                            </FormControlLabel>
                        </RadioGroup>
                    }
                    name="Answers"
                    control={control}
                />
    
            </Box>
        </Container>
    );
}

