import {useState, useEffect, useContext} from "react";
import { QuantContext } from "../context/QuantContext";
import axios from 'axios';

// Api url
const baseURL = "https://opentdb.com/api.php?amount=";

export default function Adapter () {
    
    const { quant } = useContext(QuantContext);
    const [questions, setQuestions] = useState([]);


    useEffect(() => {
        axios.get(`${baseURL}${quant}`).then(({ data }) => {
            setQuestions(data.results);
        });
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [{quant}]);

    localStorage.setItem("api", JSON.stringify(questions));
    
    // if (questions.length !== 0) { window.location.href = 'questions'; }
        
    return null;
}