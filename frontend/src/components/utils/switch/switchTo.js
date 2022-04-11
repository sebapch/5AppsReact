import React, {useContext, useEffect, useState} from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import "./switchTo.css";
import {VaultContext} from '../../../context/vaultContext'

const SwitchTo = () => {

  const [checked, setChecked] = React.useState(true);
  const { stable, setStable } = useContext(VaultContext);

  useEffect(() => {
    setStable('USDT')
  }, []);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if(event.target.checked){
      setStable('USDT')
    } else {
      setStable('CEuro')
    }
    
    
  };

  console.log(stable);
  
  return (
    <>
      <FormGroup>
        <Grid container columns={12}>
          <Grid item xs={12} className="gridStable">
            <p className="stable">EURO</p>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <p className="stable">USDT</p>
          </Grid>
        </Grid>
        

      </FormGroup>
    </>
  );
};

export default SwitchTo;
