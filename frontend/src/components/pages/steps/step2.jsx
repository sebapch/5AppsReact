import React from 'react'
import { useHistory, Link } from 'react-router-dom';
import Timelock from '../../utils/timelock/Timelock'
import imgStep2 from "../../../assets/imgStep2.png";
import './steps.css'
import './step2.css';
import { Grid } from '@mui/material';


const Step2 = () => {
  const history = useHistory();

  return (
    <>
    
      <Grid container spacing={0}>
        <Grid xs={12} className='col-steps'>
          <img src={imgStep2} alt="" className="img-step" />
        </Grid>
        <Grid>
          <Timelock />
        </Grid>
      </Grid>
      
      <div className="btn-div btn-step2">
        <button className="custom-btn btn-atras" onClick={() => history.goBack()}>Atras</button>
        <Link to="/step3" className="links-footer">
          <button className="custom-btn btn-siguiente">
            Siguiente
          </button>
        </Link>
      </div>
      </>
  )
}

export default Step2