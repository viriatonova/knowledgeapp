import React, { useState } from 'react';
import Header from './components/Header'
import Routes from './routes';
import './index.js';
import { QuantContext } from './context/QuantContext';


export default function App() {
  const [quant, setQuant] = useState(0);
 
  return (
    <QuantContext.Provider value={{ quant, setQuant }}>
      <>
        <Header />
        <Routes />
      </>
    </QuantContext.Provider>
  );
}
