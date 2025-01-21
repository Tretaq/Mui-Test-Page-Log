import React from 'react';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

const Page1 = () => {
    
    return (
        <div>
            <div className='text-xs text-black'>Make changes to your account here! Click save when you're done.</div>
            <div className='m-4'></div>
            
            <TextField id="outlined-basic" label="Name" size='small' variant="outlined" fullWidth sx={{ mr: 4 }} />  
            <div className='m-4'></div>
            
            <TextField id="outlined-basic" label="Username" size='small' variant="outlined" fullWidth sx={{ mr: 4 }} />    
            <div className='m-4'></div>
            
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >       
                    <FormControlLabel value="female" control={<Radio />} label="Female" sx={{ mb: -1 }} /> {/* Add margin-bottom */}
                    <FormControlLabel value="male" control={<Radio />} label="Male" sx={{ mb: -1 }} /> {/* Add margin-bottom */}
                    <FormControlLabel value="other" control={<Radio />} label="Other" sx={{ mb: -1 }} /> {/* Add margin-bottom */}
                </RadioGroup>

            </FormControl>
            <div className='float-right mt-32'>
                <Button variant="contained" color="success" >
                    Save Changes
                </Button>
            </div>
        </div>
    );
}

export default React.memo(Page1);