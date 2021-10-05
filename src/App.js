import React, {useState, useEffect} from 'react';
import Routes from './routes';
import Header from "./components/Header";
import './index.js';
import axios from 'axios';

const baseURL = "https://opentdb.com/api.php?amount="


export default function App() {
  
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
      axios.get(`${baseURL}4`).then((response) => {
          setQuestions(response.data);
      });
  }, []);

  const apiResults = questions.results
  console.log(apiResults);

 
  localStorage.setItem("app", apiResults);
  
  
  return (
    <>
    
      <Header />
      <Routes />

    </>
  );
}
