import React from 'react';
import './index.js';
import Header from './components/Header'
import Routes from './routes';
import Adapter from "./services/Adapter";
import QuantProvider from "./context/QuantContext"



export default function App() {
  
  

  return (
    <>
      <QuantProvider>

        <Header />
        <Routes />
        <Adapter />

      </QuantProvider>
    
    </>
  );
}
