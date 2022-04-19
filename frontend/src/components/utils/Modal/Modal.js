import React, {useContext, useEffect} from "react";
import { Modal } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import "./Modal.css";
import { Container } from "@mui/material";

export default function InfoModal({ open, handleClose, title, parrafo1, parrafo2, parrafo3, parrafo4 }) {

 

  return (
    <Modal show={open} onHide={handleClose} className="info-modal">
      <Container className="modal-container">

      <Modal.Title className="modal-title">{title}</Modal.Title>
      <br />
      <Typography id="transition-modal-description" className="modal-text">{parrafo1}</Typography>
      <br />
      {(parrafo2) ? <Typography id="transition-modal-description" className="modal-text">{parrafo2}</Typography> : null}
      <br />
      {(parrafo3) ? <Typography id="transition-modal-description" className="modal-text">{parrafo3}</Typography> : null}
      <br />
      {(parrafo4) ? <Typography id="transition-modal-description" className="modal-text">{parrafo4}</Typography> : null}

      </Container>
      
    </Modal>
  );
}
