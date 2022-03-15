import React, { useEffect, useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import Mascota from '../../assets/Mascota.svg'
import ModalInfo from '../utils/Modal/Modal';
import FixedBottomNavigation from '../layout/Footer';
import './Home.css';
import Header from '../layout/Header';

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
   <Header/> 
      
      {userData.user ? (
        <div>
      <div className="div-saldo">
        <h1 className="title-green" style={{ fontSize: '30px' }}>
          Saldo Disponible
        </h1>
        <div className="box-purple">
          <h3 className="saldo">  {userData?.user.saldo} </h3>
        </div>
      </div>

       
      <div className="home-section">
        <h3 className="subtitle-home">
          Relajate y deja que Guuru trabaje por vos
        </h3>
        <img src={Mascota} alt="" className="img-round" />
        <h4 className="text-purple">Ommmm.....</h4>
        <h4 className="text-green">¿Como Funciona?</h4>
        <h4 className="text-blue"> Listo para invertir</h4>
        <div className="btn-div">
          <button className="custom-btn btn-atras">Atras</button>
          <button className="custom-btn btn-siguiente">Siguiente</button>
        </div>
      </div>
      <FixedBottomNavigation /> 
      </div>
     
      ): ( <h1>No existe</h1>)}
     
    </>

  );
}

export default Home;