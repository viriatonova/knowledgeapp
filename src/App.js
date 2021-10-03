import React from 'react';
import Routes from './routes';
import Header from "./components/Header";
import './index.js';
import AdaptPorovider from './context/Adapt';


export default function App() {
  return (
    <>
      <AdaptPorovider>
        <Header />
        <Routes />
      </AdaptPorovider>
    </>
  );
}
