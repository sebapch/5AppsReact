import React, { useState, useContext } from 'react';
import UserContext from '../../../context/userContext';
import DrawerLayout from '../../layout/Drawer/DrawerLayout';
import Grid from '@mui/material/Grid';
import { Button, Container } from '@mui/material';
import InfoAzul from '../../../assets/icons/infoAzul.svg'
import './Historial.css';
import BtnSelector from '../../utils/btnSelector/btnSelector';



const Historial = () => {
    const[active, setActive ]=useState('Armado');  
    const { userData, setUserData } = useContext(UserContext);
    const vaultsData = userData.user?.vaults;

    console.log(userData.user?.vaults);
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
            {vaultsData?.map((vault) => (
              <Grid container className='vault-design' key={vault.id}>              
              <Grid xs={12} className='d-flex justify-content-between'>
              <label>{vault.activated ? 'Activa' :'No Activa'}</label>
              <img src={InfoAzul} alt='' width='50px' />
            </Grid>
            <Grid xs={4}>
              <label>{vault.createdAt && vault.createdAt.substring(0,10) }</label>
            </Grid>
            <Grid xs={4}>
              <label>{vault.vault === 0 ? 'Estable' : vault.vault === 1 ? 'BTC' : 'BSC'}</label>
            </Grid>
            <Grid xs={4}>
              <label>{vault.funds}</label>
            </Grid>
            </Grid>

            ))}
            
          </Grid>
          <Grid container>
            <Grid xs={12}>
              <Button variant="outlined" color="error" style={{width: '100%'}}>Volver</Button>
            </Grid>
          </Grid>

        </Container>
    </>
  )
}

export default Historial