import React, {useState, useEffect} from "react";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { Button, Select } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import axios from 'axios';
import baseURL from '../services/Adapter';


export default function HomeForm ()  {
  
    const [ quant, setQuant ] = useState();
    const [questions, setQuestions] = useState([]);
    const { control, handleSubmit } = useForm();


    const onSubmit = (data) => {
      setQuant(data.Questions);
    }

    useEffect(() => {
        axios.get(`${baseURL}${quant}`).then(({ data }) => {
            setQuestions(data.results);
        });
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quant]);

    
    localStorage.setItem("api", JSON.stringify(questions));
    
    if (questions.length !== 0) { window.location.href = 'questions'; }
        
   
    return (
      <form onSubmit={handleSubmit(onSubmit)}> 
        <FormControl fullWidth>
            <FormLabel component="legend"
            sx = {{
              marginTop: 2,
            }}
            >Questions</FormLabel>
            <Controller
              render = {({ field }) =>
                <Select {...field} 
                sx = {{
                  marginTop: 2,
                }}
                >
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                </Select>
              }
              name="Questions"
              control={control}
              defaultValue=""
            />
          <Button
          sx = {{
            marginTop: 5,
          }} 
          type="submit" 
          variant="outlined">
          Start
          </Button>
        </FormControl>
      </form>
      
  );
}

