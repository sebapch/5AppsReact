import React from 'react'
import { Link } from 'react-router-dom';
import HomeVioleta from '../../assets/homeVioleta.svg';
import VaultsBlanco from '../../assets/vaultsVioleta.svg';
import AjustesBlanco from '../../assets/ajustesBlanco.svg';
import GuuruVioleta from '../../assets/guuruVioleta.svg'
import PerfilBlanco from '../../assets/usuarioBlanco.svg'


import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-icons'>
        <img src={HomeVioleta} alt='' width="75px" />
        <Link to='/' className='links-footer'>Inicio</Link>

      </div>
      <div className='footer-icons'>
        <img src={VaultsBlanco} alt='' width="75px" />
        <Link to='/' className='links-footer'>Mis Vaults</Link>

      </div>
      <div className='footer-icons'> 
        <img src={GuuruVioleta} alt='' width="75px" />
        <Link to='/' className='links-footer'>Guuru</Link>

      </div>
      <div className='footer-icons'>
        <img src={PerfilBlanco} alt='' width="75px" />
        <Link to='/' className='links-footer'>Perfil</Link>

      </div>
      <div className='footer-icons'>
        <img src={AjustesBlanco} alt='' width="75px" />
        <Link to='/' className='links-footer'>Ajustes</Link>

      </div>
    </div>
  )
}

export default Footer