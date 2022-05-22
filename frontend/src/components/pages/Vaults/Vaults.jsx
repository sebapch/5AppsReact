import React, { useState, useContext, useEffect } from "react";
import UserContext from '../../../context/userContext';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import DrawerLayout from '../../layout/Drawer/DrawerLayout';
import { Container, Switch } from '@mui/material';
import './Vaults.css';
import CarrouselHistory from '../../utils/CarrouselHistory/CarrouselHistory';
import VaultSum from './VaultsSum';
import InfoAzul from '../../../assets/icons/infoAzul.svg';
import InfoVerde from '../../../assets/icons/infoVerde.svg';
import HistorialVerde from '../../../assets/icons/HistorialVerde.svg';
import Parado from '../../../assets/Parado.svg';
import { Button } from '@mui/material';
import BtnVaults from '../../utils/btnVaults/btnVaults';
import { Link } from "react-router-dom";
import Big4 from "../../../assets/Big4.png";
import BSC from "../../../assets/BSC.png";
import Estable from "../../../assets/Estable.png";
import USDT from "../../../assets/coins/USDT.png";
import cEuro from "../../../assets/coins/cEURO.png";
import BTC from "../../../assets/coins/BTC.png";
import ADA from "../../../assets/coins/ACS.png";
import ETH from "../../../assets/coins/Ethereum.png";
import BNB from "../../../assets/coins/BNB.png";
import Candado from "../../../assets/candado.png";
import Cake from "../../../assets/coins/Cake.png";
import Land from "../../../assets/coins/LAND.png";
import BSW from "../../../assets/coins/BSW.png";

const Vaults = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [userVaults, setUserVaults] = useState();
  let total = 0;
  let totalStable = 0;
  let totalBTC = 0;
  let totalBSC = 0;
  const uservaults = userData.user?.vaults
  
  console.log(uservaults)
  const [activeTab, setActiveTab] = useState('TODO');
  const [stableFunds, setStableFunds] = useState(0);
  const [BTCFunds, setBTCFunds] = useState(0);
  const [BSCFunds, setBSCFunds] = useState(0);
  const [cryptos, setCryptos] = useState([]);
  const [valorActual, setValorActual] = useState(0);


  useEffect(() => {
      setActiveTab('TODO')
    }, []);


  //get all the values from array and save it in states
  useEffect(() => {
    if (uservaults) {
      uservaults.map(vault => {
        total += vault.funds
        setUserVaults(total)
      }
      )
    }
  }, [uservaults])

//SUMA DE VALORES DE STABLECOINS
  useEffect(() => {
    if (uservaults) {
      uservaults.map(vault => {
        if (vault.vault === 0) {
          totalStable += vault.funds
          console.log(vault.funds)
          setStableFunds(totalStable)
        }
      }
      )
  }}, [uservaults])

//SUMA DE VALORES DE big4
  useEffect(() => {
    if (uservaults) {
      uservaults.map(vault => {
        if (vault.vault === 1) {
          totalBTC += vault.funds
          console.log(vault.funds)
          setBTCFunds(totalBTC)
        }
      }
      )
  }}, [uservaults])


  //SUMA DE VALORES DE BSC
  useEffect(() => {
    if (uservaults) {
      uservaults.map(vault => {
        if (vault.vault === 2) {
          totalBSC += vault.funds
          setBSCFunds(totalBSC)
        }
      }
      )
  }}, [uservaults])



  console.log(userVaults)

  return (
    <>
        <Container className="mb-4">
          <Grid container >
            <Grid item xs={12} >
              <label className='auto-renew'>Auto Renovar mis vaults  </label>
              <Switch />

            </Grid>
            <Grid  className='grid-btns'>
              <Grid className='grid-btn-vault'>
                <Button className={activeTab === 'TODO' ? "btn-vault-selected" : "btn-vault"} onClick={() => setActiveTab('TODO')}>
                    TODO
                    </Button>
                <Button className={activeTab === 'Estable' ? "btn-vault-selected" : "btn-vault"} onClick={() => setActiveTab('Estable')}>Estable</Button>
                <Button className={activeTab === 'Big4' ? "btn-vault-selected" : "btn-vault"} onClick={() => setActiveTab('Big4')}>Big4</Button>
                <Button className={activeTab === 'BSC' ? "btn-vault-selected" : "btn-vault"} onClick={() => setActiveTab('BSC')}>BSC</Button>
              </Grid>
            </Grid>
        
          </Grid>
          <Grid container className='card-vault'>
            
          {activeTab === 'TODO' ? 
          <Container>
              <div className='container'>
              <Grid item xs={12} className='grid-total-invested'>
                <label className='textos-vault'>Total Invertido</label>
                <img src={InfoAzul} alt='' width='50px' />
                <div className='top-right'>
                <Link to='/historial'>
                  <img src={HistorialVerde} alt='' width='50px' style={{ float: 'right' }} />
                </Link>
                </div>
              </Grid>
              <Grid item xs={12} style={{textAlign: "left"}}>
                <label className='total-invest'>$ {userVaults}</label>
              </Grid>

              <Grid item xs={12} className='grid-valor-actual'>
                <label className='textos-vault'>Valor Actual</label>
                <img src={InfoVerde} alt='' width='50px' />

              </Grid>
              <Grid item xs={12}  style={{textAlign: "left"}}>
                <label className='actual-invest'><VaultSum /></label>
              </Grid>
              <Grid item xs={12} className='img-vault'>
                <img src={Parado} alt='' width='200px' />
              </Grid>
              </div>
            </Container>


             : activeTab === 'Estable' 
             ?   <Container>
             <Grid item md={12} className='d-flex justify-content-evenly'>
               <img src={USDT} alt='Tether' width='50px' />
               <img src={cEuro} alt='Tether' width='50px'/>
             </Grid>
             <Grid item md={12} className='d-flex flex-column '>
               <label>Valor Inicial: <label>{stableFunds}</label></label>
               <label>Valor Actual: </label>
             </Grid>
              <Grid item md={12} className='d-flex flex-column'>
                <Grid item md={12} className='d-flex justify-content-evenly'>
                <label>ID</label><label>FECHA</label>
                </Grid>
                <CarrouselHistory text={'stable'}/>
             </Grid>
          </Container>



             : activeTab === 'Big4' 
             ? <Container>
             <div className='container'>
             <Grid item xs={12} className='grid-total-invested'>
               <label className='textos-vault'>Total Invertido</label>
               <img src={InfoAzul} alt='' width='50px' />
               <div className='top-right'>
               <Link to='/historial'>
                  <img src={HistorialVerde} alt='' width='50px' style={{ float: 'right' }} />
                </Link>
               </div>
             </Grid>
             <Grid item xs={12} style={{textAlign: "left"}}>
               <label className='total-invest'>$ {BTCFunds}</label>
             </Grid>
             <Grid item xs={12} className='grid-valor-actual'>
               <label className='textos-vault'>Valor Actual</label>
               <img src={InfoVerde} alt='' width='50px' />
             </Grid>
             <Grid item xs={12}  style={{textAlign: "left"}}>
               <label className='actual-invest'>$ 1200</label>
             </Grid>
             <Grid item xs={12} className='img-vault'>
               <img src={Parado} alt='' width='200px' />
             </Grid>
             </div>
           </Container>
             : activeTab === 'BSC' 
             ? <Container>
             <div className='container'>
             <Grid item xs={12} className='grid-total-invested'>
               <label className='textos-vault'>Total Invertido</label>
               <img src={InfoAzul} alt='' width='50px' />
               <div className='top-right'>
               <Link to='/historial'>
                  <img src={HistorialVerde} alt='' width='50px' style={{ float: 'right' }} />
                </Link>
               </div>
             </Grid>
             <Grid item xs={12} style={{textAlign: "left"}}>
               <label className='total-invest'>$ {BSCFunds}</label>
             </Grid>
             <Grid item xs={12} className='grid-valor-actual'>
               <label className='textos-vault'>Valor Actual</label>
               <img src={InfoVerde} alt='' width='50px' />
             </Grid>
             <Grid item xs={12}  style={{textAlign: "left"}}>
               <label className='actual-invest'>$ 1200</label>
             </Grid>
             <Grid item xs={12} className='img-vault'>
               <img src={Parado} alt='' width='200px' />
             </Grid>
             </div>
           </Container> 
             : null}


          </Grid>
          <div className='buttons-vault'>
            <Button variant="contained" color="success" className='btn-convertir'>Convertir todo a estable</Button>
            <Button variant="contained" color="error" className='btn-desarmar'> Desarmar todo</Button>
            <Button variant="contained" color="error" className='btn-desarmar'>Desarmar y retirar todo</Button>
          </div>

        </Container>
    </>
  )
}

export default Vaults