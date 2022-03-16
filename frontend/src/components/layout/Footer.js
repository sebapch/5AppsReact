import React from 'react'
import { Link } from 'react-router-dom';
import HomeVioleta from '../../assets/homeBlanco.svg';
import VaultsBlanco from '../../assets/vaultsBlanco.svg';
import AjustesBlanco from '../../assets/ajustesBlanco.svg';
import GuuruVioleta from '../../assets/guuruVioleta.svg'
import PerfilBlanco from '../../assets/usuarioBlanco.svg'
import Grid from '@mui/material/Grid';

import './Footer.css';

const Footer = () => {
  return (
    <Grid container spacing={2} columns={15} className='footer-container'>
      <Grid item xs={3}>
        <Link to='/home' className='links-footer'>
          <img src={HomeVioleta} alt='' />
          <p className='text-footer'>Inicio</p>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link to='/vaults' className='links-footer'>
          <img src={VaultsBlanco} alt=''  />
          <p className='text-footer'>Mis Vaults</p>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link to='/invest' className='links-footer'>
          <img src={GuuruVioleta} alt=''  />
          <p className='text-footer'>Guuru</p>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link to='/profile' className='links-footer'>
          <img src={PerfilBlanco} alt=''  />
          <p className='text-footer'>Perfil</p>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link to='/settings' className='links-footer'>
          <img src={AjustesBlanco} alt=''  />
          <p className='text-footer'>Ajustes</p>
        </Link>
      </Grid>
    </Grid>

  )
}

export default Footer