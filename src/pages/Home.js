import React from "react";
import Container from '@mui/material/Container';
import { Box } from "@mui/system";
import HomeForm from "../components/HomeForm";


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
                <HomeForm />
            </Box>
        </Container>
    );
    
}
