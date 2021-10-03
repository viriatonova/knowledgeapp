import React from "react";
import Container from '@mui/material/Container';
import { Box } from "@mui/system";

export default function Start() {
   
    return (
        <Container maxWidth="xl">
            <Box component='div' sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            </Box>
        </Container>
    );
    
}