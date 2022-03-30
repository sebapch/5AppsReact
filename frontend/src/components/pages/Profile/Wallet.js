import React, { useContext } from 'react'
import UserContext from '../../../context/userContext';
import Grid from '@mui/material/Grid';
import './Profile.css'
import BNB from '../../../assets/coins/BNB.svg';
import Wallet from '../../../assets/icons/Wallet.svg'
import DrawerLayout from '../../layout/Drawer/DrawerLayout';


const WalletPage = () => {
    const { userData, setUserData } = useContext(UserContext);


    const user = userData.user?.displayName;

    return (
        <>
        <DrawerLayout>
            <Grid container >
                <Grid item xs={12}>
                    <h1 className='welcome'>Guuru Tag: {user}</h1>
                </Grid>
                <Grid xs={12} className='grid-container'>
                    <div className='div-exterior'>
                        <div className='div-interior'>


                            <Grid container >
                                <Grid xs={12} className='container-btn'>

                                    <img src={Wallet} alt='' width='150px' />
                                    <h1 className='title-wallet' >
                                        Transferencia por Wallet
                                    </h1>

                                </Grid>
                            </Grid>

                            <Grid xs={12} className='container-btn'>
                                
                                <label style={{ color: "white" }}>
                                    Red del deposito
                                </label>

                            </Grid>
                            <Grid xs={12} className='grid-cerrar'>
                            <input type="text" />
                            </Grid>

                            <Grid xs={12} className='grid-cerrar'>
                                <p>
                                    Importante: los depositos a traves de Binance Pay solo pueden realizarse desde la plataforma
                                    de Binance P, ya que son pagos internos efectuados dentro de las mismas
                                </p>
                            </Grid>

                            <Grid xs={12} className='grid-cerrar'>
                                <p>
                                    Tokens Aceptados:
                                </p>
                            </Grid>

                            <Grid xs={12} className='grid-cerrar'>
                                <img src={BNB} alt='' width='150px' />
                                <img src={BNB} alt='' width='150px' />
                                <img src={BNB} alt='' width='150px' />
                                <img src={BNB} alt='' width='150px' />
                            </Grid>

                            

                            <Grid xs={12} className='grid-cerrar'>
                                <button>Atras</button>
                                <button>Cerrar</button>
                            </Grid>




                        </div>
                    </div>
                </Grid>
            </Grid>
            <label>Dolar Hoy: 1USD = 0.89EUR</label>
            </DrawerLayout>
        </>
    )
}

export default WalletPage