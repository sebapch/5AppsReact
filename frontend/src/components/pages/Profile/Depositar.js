import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../../context/userContext';
import Grid from '@mui/material/Grid';
import './Profile.css'
import BNB from '../../../assets/coins/BNB.svg';
import Wallet from '../../../assets/icons/Wallet.svg'
import HistorialAzul from '../../../assets/icons/HistorialAzul.png';



const Depositar = () => {

  const { userData, setUserData } = useContext(UserContext);
  console.log(userData)

  const user = userData.user?.displayName;
  console.log(user);

  return (
    <>
      <Grid container >
        <Grid item xs={12}>
          <h1 className='welcome '>Guuru Tag: <label className='user-label'>{user}</label> </h1>
        </Grid>
        <Grid xs={12} className='grid-container'>
          <div className='div-exterior'>
            <div className='div-interior'>
              <h1 className='title-wallet' >
                ¿Como quieres depositar tu saldo?
              </h1>

              <Grid container >
                <Link to='/bpay' className='link-depositar'>
                  <Grid xs={12} className='container-btn'>
                    <img src={BNB} alt='' width='150px'></img>
                    <label style={{ color: "white" }}>
                      Binance Pay
                    </label>

                  </Grid>
                </Link>
              </Grid>
              <Link to='/transfer' className='link-depositar'>
                <Grid xs={12} className='container-btn'>
                  <img src={Wallet} alt='' width='150px'></img>
                  <label style={{ color: "white" }}>
                    Transferencia
                  </label>
                </Grid>
              </Link>
              <Grid xs={12} className='grid-cerrar'>
                <Link to='/perfil' >
                  <label className='btn-cerrar'>
                    volver
                  </label>

                </Link>


              </Grid>



            </div>
          </div>
        </Grid>
      </Grid>
      <Grid className='cambio-grid'>
                        <div className='border-cambio'>
                            <label className='dolar-hoy'>Dolar Hoy: <label className='coin'>1 USDT </label> = <label className='coin'>0.89 EUR </label></label>
                        </div>
                        <img src={HistorialAzul} alt="" width='25px' style={{marginTop: "2%"}}/>
                    </Grid>
    </>
  )
}

export default Depositar