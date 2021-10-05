import React, {useState} from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';



export default function FormInit() {
    const [item, setItem] = useState('');
    
    const handleSubmit= (event) => {
      setItem(event.target.value);  
    };
   
    return (
        <Box component="form" sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Questions</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name='selectForm'
                    value={item}
                    label="Questions"
                    onChange={handleSubmit}
                    
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                </Select>
            </FormControl>
            <Button variant="outlined" type="Submit">Send</Button>    
        </Box>
    );

}