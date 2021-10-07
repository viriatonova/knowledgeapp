import React from "react";
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
// import { QuantContext } from "../context/QuantContext";
import { Controller, useForm } from "react-hook-form";
import { Select } from "@mui/material";


const HomeForm = () => {
  
    // const { quant, setQuant } = useContext( QuantContext );
    const { control, handleSubmit } = useForm();
    const onSubmit = data => console.log(data)
      
    return (
      <form onSubmit={handleSubmit(onSubmit)}> 
        <FormControl fullWidth>
            <FormLabel component="legend">First Name</FormLabel>
            <Controller
              render={({ field }) => <TextField {...field} />}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              name="firstName"
              control={control}
              defaultValue=""
            />
            <FormLabel component="legend">Questions</FormLabel>
            <Controller
              render = {({ field }) =>
                <Select {...field} >
                  <MenuItem value={2}>
                    2
                  </MenuItem>
                  <MenuItem value={5}>
                    5
                  </MenuItem>
                  <MenuItem value={10}>
                    10
                  </MenuItem>
                  <MenuItem value={15}>
                    15
                  </MenuItem>
                </Select>
              }
              name="wordlevel"
              control={control}
              defaultValue=""
            />
        </FormControl>
        <input type="submit"></input>
      </form>
      
  );
}
export default HomeForm;
