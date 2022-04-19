import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { VaultContext } from '../../../context/vaultContext'
import "./Modal.css";
import './ConfirmVaultModal.css';
import Axios from "axios";
import Big4 from "../../../assets/Big4.png";
import BSC from "../../../assets/BSC.png";
import Estable from "../../../assets/Estable.png";

export default function ConfirmModal({ open, handleClose }) {

  const { vault, stable, timelock, autoRenew, funds, saveVaults } = useContext(VaultContext);

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
      {(vault === 0) ? <img src={Estable} alt='vault' className="img-vault"/> : (vault === 1) ? <img src={Big4} alt='vault' className="img-vault"/> : <img src={BSC} alt='vault' className="img-vault"/>}
      
        <Typography id="transition-modal-description">Vault : {vault} </Typography>
        <Typography id="transition-modal-description">Stable : {stable} </Typography>
        <Typography id="transition-modal-description"> Timelock: {timelock}</Typography>
        <Typography id="transition-modal-description">Auto renew: {autoRenew}</Typography>
        <Typography id="transition-modal-description">funds: {funds}</Typography>


      </Modal.Body>
      <Modal.Footer>
        <Button variant="contained" onClick={handleClick}>
          Aceptar
        </Button>
        <button onClick={()=>{
          Axios.get("http://localhost:5000/users/api/vaults")
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })

        }}>traer vaults</button>
      </Modal.Footer>
    </Modal>
  );
}
