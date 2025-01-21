import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';

const Page3 = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    function SelectAutoWidth() {
        const [notif, setNotif] = React.useState('');
      
        const handleChange = (event: SelectChangeEvent) => {
          setNotif(event.target.value);
        };
        return (
        <div>
            <div className='text-xs'>Change preferences here. Click save when you're done.</div>
            <div className='m-6'></div>
            <FormControl sx={{ m: 1, minWidth: 350 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Notification settings</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={notif}
          onChange={handleChange}
          autoWidth
          label="Preferences"
        >
          <MenuItem >
            <em>No Answer</em>
          </MenuItem>
          <MenuItem value={"Most Impotant"}>Most Impotant</MenuItem>
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Some"}>Some</MenuItem>
        </Select>
      </FormControl>
      <div>Notification Frequency</div>
      <Slider
  size="small"
  defaultValue={70}
  aria-label="Small"
  valueLabelDisplay="auto"
/>
<div>Colect Additional Data</div>
<Switch {...label} defaultChecked />
<div className='float-right mt-20'>
                <Button variant="contained" color="success" >
                    Save Prefferences
                </Button>
            </div>
       
        </div>
        );
    }

    return <SelectAutoWidth />;
};

export default React.memo(Page3);