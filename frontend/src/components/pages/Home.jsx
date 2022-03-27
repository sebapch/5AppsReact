import React, { useEffect, useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import Mascota from '../../assets/Mascota.svg'
import ModalInfo from '../utils/Modal/Modal';
import FixedBottomNavigation from '../layout/Footer';
import './Home.css';
import Header from '../layout/Header';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import infoVioleta from '../../assets/icons/infoVioleta.svg'
import DrawerLayout from '../layout/Drawer/DrawerLayout';

function Home() {
  const { userData, setUserData } = useContext(UserContext);
  console.log(userData)
  const history = useHistory();
  console.log(localStorage)

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined
    })
    localStorage.setItem("auth-token", "");
    localStorage.setItem("isAuthenticated", "false");

  };

  return (
    <>
    <DrawerLayout>
   <Header/> 
      
      {userData.user ? (
        <div>
      
      <Box sx={{ flexGrow: 1 }} className="div-saldo">
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12}>
        <h1 className="title-green" style={{ fontSize: '30px' }}>
          Saldo Disponible
        </h1>
        </Grid>
        <Grid item xs={12}>
        <div className="box-purple">
          <h3 className="saldo"> $ {userData?.user.saldo} </h3>
        </div>
        </Grid>
      </Grid>
      </Box>

       
      <div className="home-section">
        <h3 className="subtitle-home">
          Relajate y deja que Guuru trabaje por vos
        </h3>
        <img src={Mascota} alt="" className="img-round" />
        
        <h4 className="text-purple">Ommm...</h4>
        <Box className='box-info'>
        <h4 className="text-green">¿Como Funciona?<img src={infoVioleta} alt='' width='20%' /></h4>
        <h4 className="text-blue"> ¿Listo para invertir?</h4>
        <div className="btn-div">
          <button className="custom-btn btn-atras">Atras</button>
          <button className="custom-btn btn-siguiente">Siguiente</button>
        </div>
        </Box>
      </div>
      <FixedBottomNavigation /> 
      </div>
     
      ): ( <h1>No existe</h1>)}
     </DrawerLayout>
    </>

  );
}

export default Home;