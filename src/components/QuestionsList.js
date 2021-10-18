import React from "react";
import Container from '@mui/material/Container';
import { Controller, useForm } from "react-hook-form";
import { FormControlLabel, RadioGroup } from "@mui/material";
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';


const categorys = [];
const questions = [];
const incorrect_answers = [];
const correct_answers = [];


let localData = JSON.parse(localStorage.getItem('apiData'));
export const rangeQuestions = localData.length;
    
localData.forEach(element => { categorys.push(element.category) });
localData.forEach(element => { questions.push(element.question) });
localData.forEach(element => { correct_answers.push(element.correct_answer)});
localData.forEach(element => { incorrect_answers.push(element.incorrect_answers)});




export default function QuestionsList ({count}) {
    const { control, handleSubmit } = useForm();

    return (
        <Container maxWidth="xl">
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: [300,500],
                marginLeft:[10,50],
                marginRight:[10],
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