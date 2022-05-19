import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {Container, Grid, Button, Switch} from '@mui/material';
import Axios from 'axios';

const VaultInfo = () => {
    const [activeTab, setActiveTab] = useState('TODO');
    const [vault, setVault] = useState([]);

    const { userid, vaultid } = useParams();
    console.log('userID: ' + userid + 'vault ID: ' + vaultid)

    useEffect(() => {
        setActiveTab('TODO')
      }, []);
    
      function traerVault (vault){
        Axios.get(`/users/api/vault/${userid}/${vaultid}`)
                .then(res => {
                  setVault(vault => res.data)
                  console.log(vault);
                })
                .catch(err => {
                  console.log(err)
                })
      }
      useEffect(() => {
        traerVault();
      }, []);

    console.log(vault);
      
  return (
    <>
            <Container className="mb-4">
          <Grid container >
            <Grid item xs={12} >
              <label className='auto-renew'>Auto Renovar mis vaults  </label>
              <Switch />

            </Grid>
            <Grid  className='grid-btns'>
              <Grid className='grid-btn-vault'>
                <Button className={activeTab === 'TODO' ? "btn-vault-selected" : "btn-vault"} onClick={() => setActiveTab('TODO')}>
                    TODO
                    </Button>
                <Button className={activeTab === 'Estable' ? "btn-vault-selected" : "btn-vault"} onClick={() => setActiveTab('Estable')}>Estable</Button>
                <Button className={activeTab === 'Big4' ? "btn-vault-selected" : "btn-vault"} onClick={() => setActiveTab('Big4')}>Big4</Button>
                <Button className={activeTab === 'BSC' ? "btn-vault-selected" : "btn-vault"} onClick={() => setActiveTab('BSC')}>BSC</Button>
              </Grid>
            </Grid>
        
          </Grid>
       
    <h1>VAULT INFO </h1>

    <Grid className="d-flex flex-column">
        <label>Vault ID: {vault._id}</label>
        <label>Fecha de armado: </label>
        <label>Saldo inicial: </label>
        <label>Saldo actual: </label>
        <label>Intereses: </label>
        <label>Timelock: </label>
    </Grid>



    </Container>
    </>
  )
}

export default VaultInfo