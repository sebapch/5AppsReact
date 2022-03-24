import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../../context/userContext';
import Grid from '@mui/material/Grid';
import './Profile.css'
import BNB from '../../../assets/coins/BNB.svg';
import Wallet from '../../../assets/icons/Wallet.svg'
import Header from '../../layout/Header';
import FixedBottomNavigation from '../../layout/Footer'


const Profile = () => {

  const { userData, setUserData } = useContext(UserContext);
  console.log(userData)

  const user = userData.user?.displayName;
  console.log(user);

  return (
    <>
      <Header />
      <Grid container >
        <Grid item xs={12}>
          <h1 className='welcome'>Guuru Tag: {user}</h1>
        </Grid>
        <Grid xs={12} className='grid-container'>
          <div className='div-exterior'>
            <div className='div-interior'>
              <h1 className='title-wallet' >
                ¿Como quieres depositar tu saldo?
              </h1>

              <Grid container >
                <Link to='/bpay'>
                  <Grid xs={12} className='container-btn'>
                    <img src={BNB} alt='' width='150px'></img>
                    <label style={{ color: "white" }}>
                      Binance Pay
                    </label>

                  </Grid>
                </Link>
              </Grid>
              <Link to='/transfer'>
                <Grid xs={12} className='container-btn'>
                  <img src={Wallet} alt='' width='150px'></img>
                  <label style={{ color: "white" }}>
                    Transferencia
                  </label>
                </Grid>
              </Link>
              <Grid xs={12} className='grid-cerrar'>
                <label className='btn-cerrar'>
                  cerrar
                </label>


              </Grid>



            </div>
          </div>
        </Grid>
      </Grid>
      <label>Dolar Hoy: 1USD = 0.89EUR</label>
      <FixedBottomNavigation />
    </>
  )
}

export default Profile