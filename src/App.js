import React from 'react';
import Header from './components/Header'
import Routes from './routes';
import './index.js';
import QuantProvider from './context/QuantContext'


export default function App() {
 
  return (
    <QuantProvider>
      
      <Header />
      <Routes />
    
    </QuantProvider>
  );
}
