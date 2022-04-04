import React, { useEffect, useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import Mascota from '../../assets/Mascota.svg'
import InfoModal from '../utils/Modal/Modal';
import FixedBottomNavigation from '../layout/Footer';
import './Home.css';
import Header from '../layout/Header';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import infoVioleta from '../../assets/icons/infoVioleta.svg'
import DrawerLayout from '../layout/Drawer/DrawerLayout';
import Container from '@mui/material/Container';

const titulo = '¿Que hace Guuru con mi dinero?'
const parrafo1 = 'Invertir con Guuru es similar a poner tu dinero en un plazo fijo. Aunque hay una gran diferencia: -en lugar de depositar tu dinero en un banco y generar ingresos en tu moneda local, estaras depositandolo en nuestras VAULTS de criptomonedas y generando dolares.  '
const titulo2 = '¿Que son las Vaults?';
const parrafo2 = 'Las vaults, o bovedas, son paquetes de inversion. Cada vault esta compuesto por 4 criptomonedas. Simplemente debes elegir el tipo de Vault que quieras, el monto a depositar y el periodo de tiempo por el que desees realizar el deposito. ';

function Home() {
  const { userData, setUserData } = useContext(UserContext);
  console.log(userData)
  const history = useHistory();
  console.log(localStorage)


      // Modal terms and use
      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

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
<Container>
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
                <h4 className="text-green">¿Como Funciona?
                <img src={infoVioleta} alt='' width='5%'  onClick={handleOpen}/>
                <InfoModal open={open} handleClose={handleClose} 
                title={titulo}
                  parrafo1={parrafo1}
                  parrafo2={parrafo2} />
                </h4>
                <h4 className="text-blue"> ¿Listo para invertir?</h4>
                <div className="btn-div">
                  <button className="custom-btn btn-atras">Atras</button>
                    <Link to="/step1" className="links-footer">
                  <button className="custom-btn btn-siguiente">
                      Siguiente
                    
                  </button>
                  </Link>
                </div>
              </Box>
            </div>
          </div>

        ) : (<h1>No existe</h1>)}
        </Container>
      </DrawerLayout>
    </>

  );
}

export default Home;