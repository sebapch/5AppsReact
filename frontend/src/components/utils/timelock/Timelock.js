import React, { useState, useContext, useEffect } from "react";
import "./Timelock.css";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Candado from "../../../assets/candado.png";
import Switch from "@mui/material/Switch";
import infoAzul from "../../../assets/icons/infoAzul.svg";
import Container from "@mui/material/Container";
import InfoModal from "../Modal/Modal";
import { VaultContext } from "../../../context/vaultContext";

const titulo='¿que es el periodo de Timelock?'
const parrafo1 = 'El periodo de Timelock es el tiempo durante el cual tus fondos estan invertidos en nuestras vaults.'
const parrafo2 = 'Puedes elegir 30, 60 o 90 días de Timelock. A mayor tiempo, mayor tasa de interés se aplicara sobre tus fondos y menor sera la tarifa de deposito que te cobraremos.'
const parrafo3 = 'Al aceptar los terminos y condiciones en el Paso 5, estarás comprometiéndote a dejar tus fondos depositados durante el tiempo que dure el Periodo de Timelock que hayas elegido.'
const parrafo4 = 'Pero no te preocupes, en caso de querer retirar tus fondos antes, siempre tendras la opcion de solicitar un Retiro de Emergencia.'


const Timelock = () => {
  const [days, setDays] = useState("");
  const [checked, setChecked] = React.useState(true);
  console.log(days);
  const [color1 , setColor1] = useState(false);
  const [color2 , setColor2] = useState(false);
  const [color3 , setColor3] = useState(false);


  const { timelock, setTimelock } = useContext(VaultContext);
  const { autoRenew, setAutoRenew } = useContext(VaultContext);

  // Modal terms and use
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleClick1(e) {
    setDays(e.target.value);
    setTimelock(e.target.value);
    setColor1(!color1);
    setColor2(false);
    setColor3(false);
  }
  function handleClick2(e) {
    setDays(e.target.value);
    setTimelock(e.target.value);
    setColor2(!color2);
    setColor1(false);
    setColor3(false);
  }
  function handleClick3(e) {
    setDays(e.target.value);
    setTimelock(e.target.value);
    setColor3(!color3);
    setColor1(false);
    setColor2(false);
  }



  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(event.target.checked);
    setAutoRenew(event.target.checked);
  };

  return (
    <>
      <Container className="timelockContainer">
        <div >
          <h1
            className="title-green"
            style={{ fontSize: "20px", textAlign: "center" }}
          >
            Selecciona el Período de Timelock para tu Vault
          </h1>
        </div>

        <Grid container className="containerCandado">
          <Grid item xs={6}>
            <Stack className="stack-div">
              <button
                value={30}
                onClick={handleClick1}
                className="btn btn-timelock"
                style={{backgroundColor: color1 ? '#82DA5C' : '#fff'}}
              >
                30D
              </button>
              <button
                value={60}
                onClick={handleClick2}
                className="btn btn-timelock"
                style={{backgroundColor: color2 ? '#82DA5C' : '#fff'}}

              >
                60D
              </button>
              <button
                value={90}
                onClick={handleClick3}
                className="btn btn-timelock"
                style={{backgroundColor: color3 ? '#82DA5C' : '#fff'}}

              >
                90D
              </button>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <img src={Candado} alt="" className="img-candado" />
          </Grid>
          
          <Grid item xs={12} >
            <label className='bloqueo'>Bloqueo = </label> <label className="days">{days} Dias</label>
          </Grid>
          <Grid item xs={12}>
            <label className='bloqueo' >Beneficio Extra =</label> <label className="days">Ninguno</label>
          </Grid>
          
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} className="aligns">
            <p className="days">auto-renovar</p>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Grid>
          <Grid item xs={12} className="aligns">
            <p className='quees'>Que es el Timelock?</p>
            <img src={infoAzul} alt="" width="50px" onClick={handleOpen} />
            <InfoModal
              open={open}
              handleClose={handleClose}
              title={titulo}
                  parrafo1={parrafo1} 
                  parrafo2={parrafo2}
                  parrafo3={parrafo3}
                  parrafo4={parrafo4}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Timelock;
