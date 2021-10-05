import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useQuant } from "../context/Quant";



export default function HomeForm() {
    const {quant, setQuant} = useQuant();
    
    const handleSubmit= (event) => {
      setQuant(event.target.value); 
      console.log(quant) 
    };
   
    return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit = {handleSubmit}
        >
          <TextField 
          id="outlined-basic" 
          label="Outlined" 
          variant="outlined"
          value = {quant} />
          <Button variant="outlined" type="submit">Send</Button>
        </Box>
      );
    

}