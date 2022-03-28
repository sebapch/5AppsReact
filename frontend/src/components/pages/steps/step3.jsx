import React, { useContext } from "react";
import UserContext from "../../../context/userContext";
import Grid from "@mui/material/Grid";
import DrawerLayout from '../../layout/Drawer/DrawerLayout'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Bag from '../../../assets/icons/bag.svg'
import { Container, Row, Col } from "react-bootstrap";

function valuetext(value) {
  return `${value}°C`;
}

const Step3 = () => {
  const { userData, setUserData } = useContext(UserContext);
  console.log(userData);

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
                <h3 className="saldo"> $ {userData?.user.saldo} </h3>
              </div>
            </Grid>



            <Box sx={{ flexGrow: 1 }} className="div-input">
              <Grid container spacing={2} columns={12} className='grid-cont-input'>
                <Grid item xs={6}>
                  <img src={Bag}  width='25%'/>
                </Grid>
                <Grid item xs={6}>
                  <input type='text' />
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
                    max={110}
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
              <button>Confirmar</button>
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
