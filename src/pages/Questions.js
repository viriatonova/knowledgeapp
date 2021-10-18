import React, { useState, useContext } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import QuestionsList from "../components/QuestionsList";
import { rangeQuestions } from "../components/QuestionsList";

export default function Questions() {
    const [count, setCount] = useState(0);

    return (
        <>
            <QuestionsList count = {count}/>
            <Stack spacing={2} direction="row" sx={{
                display:"flex",
                justifyContent:"center",
                marginTop:'3rem',
            }}>
                <Button variant="outlined" onClick={() => {if(count > 0 && count < rangeQuestions ) {setCount(count - 1 )}}}>Preview</Button>
                <Button variant="outlined" onClick={() => {if(count >= 0 && count < rangeQuestions - 1 ) {setCount(count + 1 )}}}>Next</Button>
            </Stack>
            <Stack spacing={2} direction="row" sx={{
                display:"flex",
                justifyContent:"center",
                marginTop:'3rem',
            }}>
                <Button variant="contained" sx={{}}>Submit</Button>
            </Stack>
        </>
       
    );
    
}