import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../../context/userContext';
import Grid from '@mui/material/Grid';
import BNB from '../../../assets/coins/BNB.svg';
import Wallet from '../../../assets/icons/Wallet.svg'
import Header from '../../layout/Header';
import FixedBottomNavigation from '../../layout/Footer'
import DrawerLayout from '../../layout/Drawer/DrawerLayout';
import Whatsapp from '../../../assets/icons/Whatsapp.svg';
import Mail from '../../../assets/icons/Mail.svg';
import './Settings.css';
import Container from '@mui/material/Container';
import PreguntasFrecuentes from '../../../assets/icons/PreguntasFrecuentes.svg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CargarPassword from '../../../assets/icons/CargarPassword.svg';
import Notificaciones from '../../../assets/icons/Notificaciones.svg';
import Idioma from '../../../assets/icons/Idioma.svg';
import Anti from '../../../assets/icons/anti-phishing.svg';
import Terms from '../../../assets/icons/Terms.svg';
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';

const Settings = () => {

  const { userData, setUserData } = useContext(UserContext);
  console.log(userData)

  const user = userData.user?.displayName;
  console.log(user);

  return (
    <>
      <DrawerLayout>
        <div className='contenedor'>
        <Container >
          <Grid container >
            <Grid item xs={12} className='top-soporte'>
              <h1 className='soporte'>Soporte:  </h1>
              <img src={Whatsapp} alt='' width='100px' />
              <img src={Mail} alt='' width='100px' />
            </Grid>
            <Grid xs={12} className='grid-buttons' style={{marginTop: '1rem'}}>
              <button className='btn-options'>
                <img src={PreguntasFrecuentes} alt='' width='50px' />
                Preguntas frecuentes
                <ArrowForwardIosIcon />
              </button>
            </Grid>
            <Grid xs={12} >
              <label className='labels-options'>Datos de Acceso</label>
            </Grid>
            <Grid xs={12} lassName='grid-buttons'>

              <button className='btn-options'>
              <img src={CargarPassword} alt='' width='50px' />
                Cambiar Contraseña
              <ArrowForwardIosIcon />
                </button>

            </Grid>
            <Grid xs={12} lassName='grid-buttons'>

              <button className='btn-options'>
              <img src={PreguntasFrecuentes} alt='' width='50px' />
                Clave Biométrica
              <ArrowForwardIosIcon />
                </button>

            </Grid>
            <Grid xs={12} >
              <label className='labels-options'>Preferencias</label>
            </Grid>
            <Grid xs={12} lassName='grid-buttons'>

              <button className='btn-options'>
              <img src={Notificaciones} alt='' width='50px' />
                Notificaciones
              <ArrowForwardIosIcon />
                </button>

            </Grid>
            <Grid xs={12} lassName='grid-buttons'>

              <button className='btn-options'>
              <img src={Idioma} alt='' width='50px' />
                idioma
              <ArrowForwardIosIcon />
                </button>

            </Grid>
            <Grid xs={12} lassName='grid-buttons'>

              <button className='btn-options'>
              <img src={Anti} alt='' width='50px' />
                Codigo Anti-Phishing
              <ArrowForwardIosIcon />
                </button>

            </Grid>
            <Grid xs={12} >
              <label className='labels-options'>Otros</label>
            </Grid>
            <Grid xs={12} lassName='grid-buttons'>

              <button className='btn-options'>
              <img src={Terms} alt='' width='50px' />
                Terminos y condiciones
              <ArrowForwardIosIcon />
                </button>

            </Grid>
          </Grid>

        </Container>
        </div>
      </DrawerLayout>
    </>
  )
}

export default Settings;