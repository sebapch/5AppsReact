import React from "react";
import "./Timelock.css";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Candado from "../../../assets/candado.png";
import Switch from "@mui/material/Switch";
import infoAzul from "../../../assets/icons/infoAzul.svg";
import Container from '@mui/material/Container';

const Timelock = () => {
  return (
    <>
    <Container>
      <div className="timelockContainer">
        <h1
          className="title-green"
          style={{ fontSize: "20px", textAlign: "center" }}
        >
          Selecciona el Período de Timelock para tu Vault
        </h1>
      </div>

      <Grid container  className="containerCandado">
        <Grid item xs={6}>
          <Stack>
            <button>30D</button>
            <button>60D</button>
            <button>90D</button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <img src={Candado} alt="" className="img-candado" />
        </Grid>
        <Grid item xs={12}>
          <label>Bloqueo = 30 Dias</label>
        </Grid>
        <Grid item xs={12}>
          <label>Beneficio Extra = Ninguno</label>
        </Grid>
        
      </Grid>



      <Grid container spacing={2} >
        <Grid item xs={12} className="aligns">
          <p>auto-renovar</p>
          <Switch defaultChecked />
        </Grid>
        <Grid item xs={12} className="aligns">
          <p>Que es el Timelock?</p>
          <img src={infoAzul} alt="" width="50px"/>
        </Grid>
      </Grid>
      </Container>
    </>
  );
};

export default Timelock;
