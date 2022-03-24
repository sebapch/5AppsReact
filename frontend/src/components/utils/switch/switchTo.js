import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import './switchTo.css';


const SwitchTo = () => {
  return (
    <>
      <FormGroup>
        <Grid container columns={12}>
          <Grid item xs={12} className='gridStable'>
            <p className='stable'>EURO</p>
            <Switch defaultChecked />
            <p className='stable'>USDT</p>
          </Grid>
        </Grid>
      </FormGroup>
    </>
  )
}

export default SwitchTo

