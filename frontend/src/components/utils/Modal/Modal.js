import * as React from "react";
import { Modal } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import "./Modal.css";

export default function InfoModal({ open, handleClose, children }) {
  return (
    <Modal show={open} onHide={handleClose} className="info-modal">
      <Modal.Header closeButton>
        <Modal.Title>Terms and Conditions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Typography id="transition-modal-description">{children}</Typography>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="contained" onClick={handleClose}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
