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

const Timelock = () => {
  const [days, setDays] = useState("");
  const [checked, setChecked] = React.useState(true);
  console.log(days);

  const { timelock, setTimelock } = useContext(VaultContext);
  const { autoRenew, setAutoRenew } = useContext(VaultContext);

  // Modal terms and use
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleClick(e) {
    setDays(e.target.value);
    setTimelock(e.target.value);
  }

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(event.target.checked);
    setAutoRenew(event.target.checked);
  };

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

        <Grid container className="containerCandado">
          <Grid item xs={6}>
            <Stack className="stack-div">
              <button
                value={30}
                onClick={handleClick}
                className="btn btn-timelock"
              >
                30D
              </button>
              <button
                value={60}
                onClick={handleClick}
                className="btn btn-timelock"
              >
                60D
              </button>
              <button
                value={90}
                onClick={handleClick}
                className="btn btn-timelock"
              >
                90D
              </button>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <img src={Candado} alt="" className="img-candado" />
          </Grid>
          <Grid item xs={12}>
            <label>Bloqueo = {days} Dias</label>
          </Grid>
          <Grid item xs={12}>
            <label>Beneficio Extra = Ninguno</label>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} className="aligns">
            <p>auto-renovar</p>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Grid>
          <Grid item xs={12} className="aligns">
            <p>Que es el Timelock?</p>
            <img src={infoAzul} alt="" width="50px" onClick={handleOpen} />
            <InfoModal
              open={open}
              handleClose={handleClose}
              children={"Modal del Timelock"}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Timelock;
