import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link, useParams } from 'react-router-dom';
import { Modal } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { VaultContext } from "../../../context/vaultContext";
import UserContext from '../../../context/userContext';
import Grid from "@mui/material/Grid";
import "./Modal.css";
import "./ConfirmVaultModal.css";
import axios from "axios";
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

export default function ConfirmModal({ open, handleClose }) {
  const { vault, stable, timelock, autoRenew, funds, saveVaults } =
    useContext(VaultContext);
    const { userData, setUserData } = useContext(UserContext);
    const [user, setUser] = useState([]);
    const history = useHistory();
    const id = userData.user.id;

  let Percentaje = funds / 100;
  let total = funds - Percentaje;
  const saldoRestante = userData.user.saldo - funds;


  const nuevoSaldo = () => {
    axios.post(`/users/api/edit/`, {
      userId: id,
      saldo: saldoRestante 
    })
      .then(res => {
        console.log(res)
      }
      ).catch(err => {
        console.log(err)
      })
  }

  console.log(saldoRestante);
  console.log(id);

  const handleClick = () => {
    nuevoSaldo();
    saveVaults();
    handleClose();
    history.push({
      pathname: '../step4'
   });
  };

  return (
    <Modal show={open} onHide={handleClose} className="info-modal">
      <Modal.Header closeButton closeVariant="white" className="modal-header">
        <Modal.Title className="resumen">Resumen de solicitud</Modal.Title>
        {saldoRestante}
      </Modal.Header>
      <Modal.Body className="modal-body">
        <Typography className="vault-elegido">Vault elegido</Typography>
        {vault === 0 ? (
          <img src={Estable} alt="vault" className="img-vault" />
        ) : vault === 1 ? (
          <img src={Big4} alt="vault" className="img-vault" />
        ) : (
          <img src={BSC} alt="vault" className="img-vault" />
        )}

        {/* LOGICA PARA MOSTRAR IMAGEN STABLECOIN */}
        {vault === 0 && stable === "USDT" ? (
          <img
            src={USDT}
            alt="vault"
            className="img-vault-modal"
            width="75px"
          />
        ) : vault === 0 && stable === "CEuro" ? (
          <img
            src={cEuro}
            alt="vault"
            className="img-vault-modal"
            width="75px"
          />
        ) : null}

        {/* LOGICA PARA MOSTRAR IMAGEN DE BIG4 Y BSC */}
        {vault === 1 ? (
          
          <Grid  container className="coins-grid">
            <Grid xs={6} className="grid-coins">
              <img src={BTC} alt="vault" className="img-vault-modal" />
              <label className="img-vault-text">BTC</label>
            </Grid>
            <Grid  xs={6} className="grid-coins">
              <img src={ADA} alt="vault" className="img-vault-modal" />
              <label className="img-vault-text">ADA</label>
            </Grid>
            <Grid xs={6} className="grid-coins">
              <img src={ETH} alt="vault" className="img-vault-modal" />
              <label className="img-vault-text">ETH</label>
            </Grid>
            <Grid xs={6} className="grid-coins">
              <img src={BNB} alt="vault" className="img-vault-modal" />
              <label className="img-vault-text">BNB</label>
            </Grid>
          </Grid>
        ) :  (
          <Grid container className="coins-grid">
            <Grid xs={6} className="grid-coins">
              <img src={Cake} alt="vault" className="img-vault-modal" />
              <label className="img-vault-text">CAKE</label>
            </Grid>
            <Grid xs={6} className="grid-coins">
              <img src={Land} alt="vault" className="img-vault-modal" />
              <label className="img-vault-text">LAND</label>
            </Grid>
            <Grid xs={6} className="grid-coins">
              <img src={BSW} alt="vault" className="img-vault-modal" />
              <label className="img-vault-text">BSW</label>
            </Grid>
            <Grid xs={6} className="grid-coins">
              <img src={BNB} alt="vault" className="img-vault-modal" />
              <label className="img-vault-text">BNB</label>
            </Grid>
          </Grid>
        )}
        <Grid container className="grid-stats">
          <Grid>
            <Typography className="transition-modal-description">
              Timelock = <label className="img-vault-text">{timelock} Dias</label>
              <img src={Candado} alt="timelock" width="25px" style={{marginLeft: '1rem'}} />
            </Typography>
          </Grid>
          <Grid>
            <Typography className="transition-modal-description">
              Inversion = <label className="img-vault-text"> ${funds}</label>
            </Typography>
          </Grid>
          <Grid>
            <Typography className="transition-modal-description" sx={{color: 'red'}}>
              Armado -1%
            </Typography>
          </Grid>
          <Grid>
            <Typography className="transition-modal-description">
              Total a Invertir = <label className="img-vault-text"> ${total}</label>
            </Typography>
          </Grid>
          <Grid>
            {autoRenew == true ? (
              <Typography className="transition-modal-description">
                Auto renovar = <label style={{color: '#7ED957'}}>ACTIVADO</label>
              </Typography>
            ) : (
              <Typography className="transition-modal-description">
                Auto renovar <label style={{color: 'red'}}>DESACTIVADO</label>
              </Typography>
            )}
          </Grid>
        </Grid>
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <Button variant="contained" onClick={handleClick}>
          Siguiente
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
