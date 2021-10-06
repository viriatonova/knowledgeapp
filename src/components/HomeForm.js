import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";

const baseURL = "https://opentdb.com/api.php?amount=";

export default function HomeForm() {
    const [ quant, setQuant ] = useState();
    const [questions, setQuestions] = useState([]);

    const handleChange = (event) => {
      setQuant(event.target.value);
    };

    useEffect(() => {
      axios.get(`${baseURL}${quant}`).then((response) => {
          setQuestions(response.data);
      });
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(questions)

    // localStorage.setItem("app", apiResults);

    return (

      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Questions</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Questions"
          value={quant}
          onChange={handleChange}
        >
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
    </Box>
      );
  
}