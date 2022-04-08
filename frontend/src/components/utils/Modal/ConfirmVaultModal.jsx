import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { VaultContext } from '../../../context/vaultContext'
import "./Modal.css";
import Axios from "axios";

export default function ConfirmModal({ open, handleClose }) {

  const { vault, stable, timelock, autoRenew, funds, saveVaults } = useContext(VaultContext);

  const handleClick = () => {
    saveVaults()
    handleClose()
  }

  return (
    <Modal show={open} onHide={handleClose} className="info-modal">
      <Modal.Header closeButton>
        <Modal.Title>Resumen de solicitud</Modal.Title>
        <Modal.Title>Vault elegido:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
