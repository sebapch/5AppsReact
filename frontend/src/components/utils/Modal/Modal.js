import React, {useContext, useEffect} from "react";
import { Modal } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import "./Modal.css";

export default function InfoModal({ open, handleClose, children }) {

 

  return (
    <Modal show={open} onHide={handleClose} className="info-modal">
      <Modal.Title>Terms and Conditions</Modal.Title>

      <Typography id="transition-modal-description">{children}</Typography>

      <Button variant="contained" onClick={handleClose}>
        Aceptar
      </Button>
    </Modal>
  );
}
