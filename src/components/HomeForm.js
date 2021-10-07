import React from "react";
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { useQuant } from "../context/QuantContext";
import { Controller, useForm } from "react-hook-form";
import { Button, Select } from "@mui/material";


const HomeForm = () => {
  
    const { quant, setQuant } = useQuant();
    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => {
      setQuant(data.Questions);
      // window.location.href = `/tranfser-confirmation?from=${'/questions'}`;
    }

    console.log(quant)

    return (
      <form onSubmit={handleSubmit(onSubmit)}> 
        <FormControl fullWidth>
            <FormLabel component="legend"
            sx = {{
              marginTop: 2,
            }}
            >First Name</FormLabel>
            <Controller
              render={({ field }) => <TextField {...field} 
              sx = {{
                marginTop: 2,
              }} 
              />}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              name="firstName"
              control={control}
              defaultValue=""
            />
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
export default HomeForm;
