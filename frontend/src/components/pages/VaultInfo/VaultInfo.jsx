import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, Button, Switch } from "@mui/material";
import Axios from "axios";
import './VaultInfo.css';
import LinearWithValueLabel from "../../utils/LinearLabel/LinearLabel";

const VaultInfo = () => {
  const [vault, setVault] = useState([]);

  const { userid, vaultid } = useParams();

  const start = toTimestamp(vault.createdAt);
  const end = vault.endDate
  const now = toTimestamp(new Date());

  console.log(end);

  function traerVault(vault) {
    Axios.get(`/users/api/vaults/${userid}/${vaultid}`)
      .then((res) => {
        res.data.vaults.map((vault) => {
          console.log(vault)
          if(vault._id === vaultid){
            setVault(vault)
            console.log(vault)
          }
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    traerVault();
  }, []);

  function toTimestamp(strDate){
    var datum = Date.parse(strDate);
    return datum/1000;
 }
 


  return (
    <>
      <Container className="mb-4">
       
        <Grid className="d-flex flex-column border-info p-4 m-4">
          <label className='info-purple'>Vault ID: <label className='info-green'>{vault._id}</label></label>
          <label className='info-purple'>Fecha de armado: <label className='info-green'>{vault.createdAt}</label></label>
          <label className='info-purple'>Saldo inicial: <label className='info-green'>{vault.funds}</label></label>
          <label className='info-purple'>Saldo actual: <label className='info-green'>INSERTAR SALDO ACTUAL</label></label>
          <label className='info-purple'>Intereses: <label className='info-green'>INSERTAR INTERESES</label></label>
          <label className='info-purple'>Timelock: <label className='info-green'>{vault.timelock}D</label></label>
          <LinearWithValueLabel value={{start, end, now}}/>
          <br/>
          <label>COINS:</label>
          
          {/* {vault.coins?.map((coin, index) => {
            return (
              <>
                <label> {coin.coin}</label>
                <label>Monto: {coin.quantity}</label>
              </>
            );
          })} */}
        
        </Grid>
      </Container>
    </>
  );
};

export default VaultInfo;
