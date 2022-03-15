import React, { Component, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';
import UserContext from '../../context/userContext';
import './Header.css';
import solBlanco from '../../assets/solBlanco.svg'
import lunaVioleta from '../../assets/lunaVioleta.svg'
import LogoSinTexto from '../../assets/LogoSinTexto.svg'

function Header() {
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
      {userData.user ? (
        <div className='header'>
          <div className='titledivider'>
            <h1 className="titleHeader">Guuru</h1>
            </div>
            <div className='icons'>
            <img src={solBlanco} style={{ color: 'white', width: "30px" }} alt='' />
            <p className='divider-slash'>/</p>
            <img src={lunaVioleta} style={{ color: 'white', width: "30px" }} alt='' />
            </div>
         
          <div>
            <img src={LogoSinTexto} style={{ color: 'white', width: "100px" }} alt='' className='img-round-logo' />
          </div>
        </div>



      ) : (
        <div>
          <h2>You are not logged in</h2>
          <button>LOG IN</button>
        </div>
      )}
    </>
  );

}

export default Header;