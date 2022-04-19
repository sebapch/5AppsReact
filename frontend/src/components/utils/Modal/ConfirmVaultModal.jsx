import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { VaultContext } from '../../../context/vaultContext'
import Grid from '@mui/material/Grid';
import "./Modal.css";
import './ConfirmVaultModal.css';
import Axios from "axios";
import Big4 from "../../../assets/Big4.png";
import BSC from "../../../assets/BSC.png";
import Estable from "../../../assets/Estable.png";
import USDT from '../../../assets/coins/USDT.svg';
import cEuro from '../../../assets/coins/cEURO.svg';
import BTC from "../../../assets/coins/BTC.svg";
import ADA from "../../../assets/coins/ACS.svg";
import ETH from "../../../assets/coins/Ethereum.svg";
import BNB from "../../../assets/coins/BNB.svg";
import Candado from "../../../assets/candado.png";


export default function ConfirmModal({ open, handleClose }) {

  const { vault, stable, timelock, autoRenew, funds, saveVaults } = useContext(VaultContext);

  const Percentaje =  (funds) / 100;
  const total = (funds-Percentaje);

  console.log(Percentaje);

  const handleClick = () => {
    saveVaults()
    handleClose()
  }

  

  return (
    <Modal show={open} onHide={handleClose} className="info-modal">
      <Modal.Header closeButton className="modal-header">
        <Modal.Title className='resumen'>Resumen de solicitud</Modal.Title>


      </Modal.Header>
      <Modal.Body className="modal-body">
        <Typography className="vault-elegido">Vault elegido</Typography>
        {(vault === 0) ? <img src={Estable} alt='vault' className="img-vault" /> : (vault === 1) ? <img src={Big4} alt='vault' className="img-vault" /> : <img src={BSC} alt='vault' className="img-vault" />}


        {/* LOGICA PARA MOSTRAR IMAGEN STABLECOIN */}
        {(vault === 0 && stable === 'USDT')
          ?
          <img src={USDT} alt='vault' className="img-vault-modal" width='75px' />
          : (vault === 0 && stable === 'CEuro')
            ?
            <img src={cEuro} alt='vault' className="img-vault-modal" width='75px' />
            :
            null
        }

        {/* LOGICA PARA MOSTRAR IMAGEN DE BIG4 Y BSC */}
        {(vault === 1)
          ?
          <Grid className="coins-grid">
            <Grid xs={6} className='grid-coins'>
              <img src={BTC} alt='vault' className="img-vault-modal" />
              <label>BTC</label>
            
              <img src={ADA} alt='vault' className="img-vault-modal" />
              <label>ADA</label>
            </Grid>
            <Grid xs={6} className='grid-coins'>
              <img src={ETH} alt='vault' className="img-vault-modal" />
              <label>ETH</label>
            
              <img src={BNB} alt='vault' className="img-vault-modal" />
              <label>BNB</label>
            </Grid>
          </Grid>
          : (vault === 2)
            ?
            <Grid>
              <img src={BTC} alt='vault' className="img-vault-modal" />
              <img src={ADA} alt='vault' className="img-vault-modal" />
              <img src={ETH} alt='vault' className="img-vault-modal" />
              <img src={BNB} alt='vault' className="img-vault-modal" />
            </Grid>
            :
            null
        }



        <Typography id="transition-modal-description"> Timelock: {timelock} <img src={Candado} alt='timelock' width='25px' /> </Typography>

        <Typography id="transition-modal-description"> Inversion: ${funds}  </Typography>
        <Typography id="transition-modal-description"> Armado: 1%  </Typography>
        <Typography id="transition-modal-description"> Total a Invertir: ${total}  </Typography>

        {(autoRenew == true) ? <Typography id="transition-modal-description">Auto renovar ACTIVADO</Typography> : <Typography id="transition-modal-description">Auto renovar DESACTIVADO</Typography>}
        


      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <Button variant="contained" onClick={handleClick} >
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
