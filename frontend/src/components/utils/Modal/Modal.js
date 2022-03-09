import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./Modal.css" 

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  inlineSize: "min-content",
};

export default function BasicModal({success, setSuccess, newName, link, newAddress}) {
  

  return (
    <div className="modal-nuevo">
      <Modal
        open={success}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}  className="modal-content">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Token successfully created!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3, mb: 3 }} >
            You can see your Token "{newName}" at: <a href={link + newAddress}target="_blank" rel="noreferrer" style={{color: 'blue'}}>{link + newAddress}</a>
          </Typography>
          <Button variant="contained" id="modal" color="success" onClick={() => setSuccess(false)} className='modal-button'>
            Accept
          </Button>
        </Box>
      </Modal>
    </div>
  );
}