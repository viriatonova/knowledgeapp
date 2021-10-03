import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function FormInicio() {
    return (
        <Box 
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField 
            id="outlined-basic" 
            label="Perguntas" 
            variant="outlined" 
            size="small"
            />
            <Button 
            variant="outlined" 
            size="large"
            >Enviar</Button>
        </Box>
    );
}