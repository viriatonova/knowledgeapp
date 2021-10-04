import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';



export default function FormInit() {
    const [questions, setQuestions] = React.useState('');
  
    const handleChange = (event) => {
      setQuestions(event.target.value);
    };
    
    const handleSubmit = (event) => {
      console.log([questions]);
    };
    

    return (
        <Box component="form" sx={{ minWidth: 120 }} onSubmit={handleSubmit}>
            <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">Questions</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name='selectForm'
                    value={questions}
                    label="Questions"
                    onChange={handleChange}
                    
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                </Select>
            </FormControl>
            <Button variant="outlined" type="Submit">Send</Button>    
        </Box>
    );

}