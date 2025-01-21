import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Page2 = () => {
    return (
        <div>
        <div className='text-xs'>Change your password here. After saving, you'll be loged out.</div>
        <div className='m-4'></div>
        <TextField id="outlined-basic" label="Old Password" size='small' variant="outlined" fullWidth sx={{ mr: 4 }} /> 
         <div className='m-4'></div>
                    
        <TextField id="outlined-basic" label="New Password" size='small' variant="outlined" fullWidth sx={{ mr: 4 }} />    
        <div className='m-4'></div>
        <TextField id="outlined-basic" label="Confirm password" size='small' variant="outlined" fullWidth sx={{ mr: 4 }} />    
        <div className='m-4'></div>
        <div className='float-right mt-16'>
                <Button variant="contained" color="success" >
                    Change Password
                </Button>
            </div>
        </div>
        
    )
}
export default React.memo(Page2);