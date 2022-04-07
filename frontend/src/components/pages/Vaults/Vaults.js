import * as React from 'react';
import Grid from '@mui/material/Grid';
import DrawerLayout from '../../layout/Drawer/DrawerLayout';
import { Container, Switch } from '@mui/material';
import './Vaults.css';
import InfoAzul from '../../../assets/icons/infoAzul.svg';
import InfoVerde from '../../../assets/icons/infoVerde.svg';
import HistorialVerde from '../../../assets/icons/HistorialVerde.svg';
import Parado from '../../../assets/Parado.svg';
import { Button } from '@mui/material';


const Vaults = () => {
  return (
    <>
      <DrawerLayout>
        <Container style={{ width: '75%' }}>
          <Grid container >
            <Grid item xs={12} >
              <label className='auto-renew'>Auto Renovar mis vaults  </label>
              <Switch />

            </Grid>
            <Grid item xs={12} className='grid-btns'>
              <button className='btn-vault'>TODO</button>
              <button className='btn-vault'>Estable</button>
              <button className='btn-vault'>Big4</button>
              <button className='btn-vault'>BSC</button>
            </Grid>

          </Grid>
          <Grid container className='card-vault'>
            <Container>
              <Grid item xs={12} className='grid-total-invested'>
                <label className='textos-vault'>Total Invertido</label>
                <img src={InfoAzul} alt='' width='50px' />
                <img src={HistorialVerde} alt='' width='50px' style={{ float: 'right' }} />

              </Grid>
              <Grid item xs={12}>
                <label className='total-invest'>$ 1000</label>
              </Grid>
              <Grid item xs={12}>
                <label className='textos-vault'>Valor Actual</label>
                <img src={InfoVerde} alt='' width='50px' />

              </Grid>
              <Grid item xs={12}>
                <label className='actual-invest'>$ 1200</label>
              </Grid>
              <Grid item xs={12} className='img-vault'>
                <img src={Parado} alt='' width='200px' />
              </Grid>

            </Container>

          </Grid>
          <div className='buttons-vault'>
            <Button variant="contained" color="success" className='btn-convertir'>Convertir todo a estable</Button>
            <Button variant="contained" color="error" className='btn-desarmar'> Desarmar todo</Button>
            <Button variant="contained" color="error" className='btn-desarmar'>Desarmar y retirar todo</Button>
          </div>

        </Container>
      </DrawerLayout>
    </>
  )
}

export default Vaults