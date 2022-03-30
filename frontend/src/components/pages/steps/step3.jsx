import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../../context/userContext";
import Grid from "@mui/material/Grid";
import DrawerLayout from '../../layout/Drawer/DrawerLayout'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Bag from '../../../assets/icons/bag.svg'
import { Container, Row, Col } from "react-bootstrap";
import InfoModal from '../../utils/Modal/Modal';

function valuetext(value) {
  return `${value}°C`;
}



const Step3 = () => {
  const { userData, setUserData } = useContext(UserContext);
  console.log(userData);
  const [saldo, setSaldo] = useState('');
  const [invest, setInvest] = useState('');
      // Modal terms and use
      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);


  useEffect(()=>{
    const datos = userData.user?.saldo
    setSaldo(datos)
    console.log(datos)
  }, [userData])

  function handleChange(evt) {
    const value = evt.target.value;
    if(value > saldo){
      value = saldo
      setSaldo(value)
    } else {
      setSaldo(value)
    }
}

function handleSlider(value){
  const valor = value.target.value
  const final = (saldo * (valor/100)) ;

  setInvest(final);
}

  return (
    <>
      <DrawerLayout>
        <Container>
        {userData.user ? (
          <Grid>
            <Grid item xs={12}>
              <h1 className="title-green" style={{ fontSize: '30px' }}>
                Saldo Disponible
              </h1>
            </Grid>
            <Grid item xs={12}>
              <div className="box-purple">
                <h3 className="saldo"> $ {saldo} </h3>
              </div>
            </Grid>



            <Box sx={{ flexGrow: 1 }} className="div-input">
              <Grid container spacing={2} columns={12} className='grid-cont-input'>
                <Grid item xs={6}>
                  <img src={Bag}  width='25%'/>
                </Grid>
                <Grid item xs={6}>
                  <input type='number' onChange={handleChange} value={invest} /> 
                </Grid>
                <Grid item xs={12}>
                  <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={100}
                    onChange={handleSlider}
                  />
                </Grid>
              </Grid>
            </Box>



            <Grid md={12}>
              <label>Tarifa de armado = 1%</label>
            </Grid>
            <Grid md={12}>
              Disclaimer: el mercado de criptomonedas es un mercado con mucho riesgo
              y volatilidad. Guuru no es un asesor financiero y no se responsabiliza por las
              posibles perdidas de valor que los activos puedan experimentar debido
              a los movimientos del mercado. Al utilizar Guuru, todos los usuarios aceptan
              bloquear sus fondos entendiendo dichos riesgos

            </Grid>
            <Grid md={12}>
              <p>Aceptar</p>
            </Grid>
            <Grid md={12}>
              <button>Atras</button>
              <button onClick={handleOpen}>Confirmar</button>
              <InfoModal open={open} handleClose={handleClose} children={'Total invertido' + invest}/>

            </Grid>


          </Grid>
        ) : (
          <h1>No existe</h1>
        )}
        </Container>
      </DrawerLayout>
    </>
  );
};

export default Step3;
