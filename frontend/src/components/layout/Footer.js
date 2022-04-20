import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import HomeVioleta from "../../assets/homeVioleta.svg";
import HomeBlanco from "../../assets/homeBlanco.svg";
import VaultsVioleta from "../../assets/vaultsVioleta.svg";
import VaultsBlanco from "../../assets/vaultsBlanco.svg";
import AjustesVioleta from "../../assets/ajustesVioleta.svg";
import AjustesBlanco from "../../assets/ajustesBlanco.svg";
import GuuruVioleta from "../../assets/guuruVioleta.svg";
import GuuruBlanco from "../../assets/guuruBlanco.svg";
import PerfilVioleta from "../../assets/usuarioVioleta.svg";
import PerfilBlanco from "../../assets/usuarioBlanco.svg";
import Grid from '@mui/material/Grid';

import './Footer.css';

const Footer = () => {

  const [activeTab, setActiveTab] = useState('Home');


  return (
    <Grid container spacing={2} columns={15} className='footer-container'>
      <Grid item xs={3} className='footer-grid'>
        <Link to='/' className='links-footer' onClick={() => setActiveTab('Home')}>
          <img src={activeTab === 'Home' ? HomeVioleta : HomeBlanco} alt=''className='img-footer' />
          <p className={activeTab === 'Home' ? "text-footer-selected" : "text-footer"}>Inicio</p>
        </Link>
      </Grid>
      <Grid item xs={3} className='footer-grid'>
        <Link to='/vaults' className='links-footer' onClick={() => setActiveTab('Vaults')}>
          <img src={activeTab === 'Vaults' ? VaultsVioleta : VaultsBlanco} alt='' className='img-footer' />
          <p className={activeTab === 'Vaults' ? "text-footer-selected" : "text-footer"}>Mis Vaults</p>
        </Link>
      </Grid>
      <Grid item xs={3} className='footer-grid'>
        <Link to='/step1' className='links-footer' onClick={() => setActiveTab('Guuru')}>
          <img src={activeTab === 'Guuru' ? GuuruVioleta : GuuruBlanco} alt='' className='img-footer' />
          <p className={activeTab === 'Guuru' ? "text-footer-selected" : "text-footer"}>Guuru</p>
        </Link>
      </Grid>
      <Grid item xs={3} className='footer-grid'>
        <Link to='/perfil' className='links-footer' onClick={() => setActiveTab('Perfil')}>
          <img src={activeTab === 'Perfil' ? PerfilVioleta : PerfilBlanco} alt='' className='img-footer' />
          <p className={activeTab === 'Perfil' ? "text-footer-selected" : "text-footer"}>Perfil</p>
        </Link>
      </Grid>
      <Grid item xs={3} className='footer-grid'>
        <Link to='/opciones' className='links-footer' onClick={() => setActiveTab('Opciones')}>
          <img src={activeTab === 'Opciones' ? AjustesVioleta : AjustesBlanco} alt=''  className='img-footer'/>
          <p className={activeTab === 'Opciones' ? "text-footer-selected" : "text-footer"}>Ajustes</p>
        </Link>
      </Grid>
    </Grid>

  )
}

export default Footer