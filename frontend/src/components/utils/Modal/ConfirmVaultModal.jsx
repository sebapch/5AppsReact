import React, {useState, useContext} from "react";
import { Modal } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { VaultContext } from '../../../context/vaultContext'
import "./Modal.css";

export default function ConfirmModal({ open, handleClose }) {

    const { vault, stable, timelock,autoRenew, funds } = useContext(VaultContext);



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
        <Button variant="contained" onClick={handleClose}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
