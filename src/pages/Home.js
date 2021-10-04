import React from "react";
import Container from '@mui/material/Container';
import { Box } from "@mui/system";
import FormInit from "../components/FormInit";

export default function Home() {
   
    return (
        <Container maxWidth="xl">
           
            <Box component='div' sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <h2>Para começar, digite a quantidade de perguntas desejada.</h2>
                <FormInit />
            </Box>
        </Container>
    );
    
}
