import * as React from 'react';
import { Modal } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function InfoModal({ open, handleClose }) {
    return (
        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Terms and Conditions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Typography id="transition-modal-description">
                    <Typography id="transition-modal-title" variant="h6" component="span" sx={{ display: 'block' }}>Terse</Typography>
                    LOREN IPSUM
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    <Typography id="transition-modal-title" variant="h6" component="span" sx={{ display: 'block' }}>asddd</Typography>
                    
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    <Typography id="transition-modal-title" variant="h6" component="span" sx={{ display: 'block' }}>Tqwp</Typography>
                    
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    <Typography id="transition-modal-title" variant="h6" component="span" sx={{ display: 'block' }}>asdasd</Typography>
                    
                </Typography></Modal.Body>
            <Modal.Footer>
                <Button variant="contained" onClick={handleClose}>Aceptar</Button>
            </Modal.Footer>
        </Modal>
    )
}