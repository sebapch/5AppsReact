import React, { Component, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Login from '../auth/Login';
import AuthOptions from '../auth/AuthOptions';
import UserContext from '../../context/userContext';
import './Header.css';
import solBlanco from '../../assets/solBlanco.svg'
import lunaVioleta from '../../assets/lunaVioleta.svg'
import LogoSinTexto from '../../assets/LogoSinTexto.svg'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Header() {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();


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
      

        <Box sx={{ flexGrow: 2 }}>
          <Grid container spacing={2} className='header'>
            <Grid xs={8} className='divHeader'>
              <h1 className="titleHeader">Guuru</h1>
              
            </Grid>
            <Grid item xs={4} >
              <img src={LogoSinTexto} style={{ color: 'white', width: "150px" }} alt='' className='img-round-logo' />
            </Grid>
            <Grid item xs={2} className='diaynoche'>
              <img src={solBlanco} style={{ color: 'white', width: "30px" }} alt='' className='theme'/>
              <p className='divider-slash'>/</p>
              <img src={lunaVioleta} style={{ color: 'white', width: "30px" }} alt='' className='theme'/>
            </Grid>
         
          </Grid>
        </Box>

      
    </>
  );

}

export default Header;