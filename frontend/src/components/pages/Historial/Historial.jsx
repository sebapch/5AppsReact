import React, { useState } from 'react';

import DrawerLayout from '../../layout/Drawer/DrawerLayout';
import Grid from '@mui/material/Grid';
import { Button, Container } from '@mui/material';
import InfoAzul from '../../../assets/icons/infoAzul.svg'
import './Historial.css';
import BtnSelector from '../../utils/btnSelector/btnSelector';



const Historial = () => {
    const[active, setActive ]=useState('Armado');  

  return (
    <>
        <Container>
          <h1 className='title'>Historial</h1>
          <Grid container>
            <Grid xs={12}>
            <Grid className='grid-btn'>
                <Button className={ active === 'Armado' ? "btn-stable-selected" : 'btn-stable'} onClick={() => setActive('Armado')}>
                    Armado
                    </Button>
                <Button className={active === 'Retiro' ? "btn-stable-selected" : 'btn-stable'} onClick={() => setActive('Retiro')}>Retiro</Button>
            </Grid>
            </Grid>

          </Grid>
          <Grid container className='table-grid'>
            <Grid xs={12}>
              <label>Desarmado</label>
              <img src={InfoAzul} alt='' width='50px' />
            </Grid>
            <Grid xs={4}>
              <label>04/04/2022</label>
            </Grid>
            <Grid xs={4}>
              <label>BSC</label>
            </Grid>
            <Grid xs={4}>
              <label>$500</label>
            </Grid>

          </Grid>

          <Grid container>

            <Grid xs={12}>
              <Button variant="outlined" color="error" style={{width: '100%'}}>Cerrar</Button>
            </Grid>
          </Grid>

        </Container>
    </>
  )
}

export default Historial