import React, { useContext } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { QuantContext } from "../context/QuantContext";

export default function HomeForm() {
    const { quant, setQuant } = useContext( QuantContext );
    

    const handleChange = (event) => {
      setQuant(event.target.value);
    };

    console.log(quant)


    return (
      <form> 
        <FormControl component="fieldset">
          <FormLabel component="legend">Questions</FormLabel>
          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
            <FormControlLabel value={2} control={<Radio />} label="2" />
            <FormControlLabel value={5} control={<Radio />} label="5" />
            <FormControlLabel value={10} control={<Radio />} label="10" />
            <FormControlLabel value={15} control={<Radio />} label="15" />
          </RadioGroup>
        </FormControl>
        <button type="submit">Start</button>
      </form>
      
  );
  
}