import React from "react";
import Box from '@mui/material/Box';
import { flexbox } from "@mui/system";


export default function Header() {
   
    return (
        <Box component="span" sx={{
            width: 'full',
            height: 'auto', 
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'black',
            color:'White',
            fontSize: '1.75rem'
        }}>
            Knowledge App
        </Box>
    );
    
}