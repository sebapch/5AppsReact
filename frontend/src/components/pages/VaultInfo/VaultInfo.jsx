import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, Button, Switch } from "@mui/material";
import Axios from "axios";

const VaultInfo = () => {
  const [vault, setVault] = useState([]);

  const { userid, vaultid } = useParams();
  console.log("userID: " + userid + "vault ID: " + vaultid);



  function traerVault(vault) {
    Axios.get(`/users/api/vaults/${userid}/${vaultid}`)
      .then((res) => {
        setVault(res.data);
        res.data.vaults.map((vault) => {
          console.log(vault)
          if(vault._id === vaultid){
            console.log(vaultid)
            setVault(vault)
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

  console.log(vault);

  return (
    <>
      <Container className="mb-4">
        <h1>VAULT INFO </h1>

        <Grid className="d-flex flex-column">
          <label>Vault ID: {vault._id}</label>
          <label>Fecha de armado: {vault.createdAt}</label>
          <label>Saldo inicial: {vault.funds}</label>
          <label>Saldo actual: INSERTAR SALDO ACTUAL</label>
          <label>Intereses: INSERTAR INTERESES</label>
          <label>Timelock: {vault.timelock}</label>
          <br/>
          <label>COINS:</label>
          {vault.coins?.map((coin, index) => {
            return (
              <>
                <label> {coin.coin}</label>
                <label>Monto: {coin.quantity}</label>
              </>
            );
          })}
        
        </Grid>
      </Container>
    </>
  );
};

export default VaultInfo;
