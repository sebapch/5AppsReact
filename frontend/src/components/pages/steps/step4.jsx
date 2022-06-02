import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from 'axios';
import { Grid } from "@mui/material";
import UserContext from "../../../context/userContext";
import Mascota from "../../../assets/Mascota.png";
import Reloj from "../../../assets/icons/RelojArena.png";
import { Button } from "@mui/material";
import "./steps.css";
import "./step4.css";

const Step4 = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [vault, setVault] = useState([]);
  const [funds, setFunds] = useState(0);
  const [lastElement, setLastElement] = useState([]);
  let idUser = userData.user?._id;
  const history = useHistory();

  async function bringDataFromVault(){
    await Axios.get(`/users/api/vaults/${idUser}`)

    .then(res => {
      console.log(res.data)
      setVault(res.data)
      setLastElement(res.data?.vaults[0]._id)
      setFunds(res.data?.vaults[0].funds)
    })
  }

  useEffect(() => {
    bringDataFromVault();
  }, [userData])


  console.log(lastElement);
  console.log(vault);

  async function deleteVault(){
    await Axios.delete(`/users/api/vaults/${idUser}`)
    .then(res => {
      console.log(res.data)
      history.push( '/');
    })
  }


  return (
    <>
      <Grid container spacing={0} className="div-saldo">
        <Grid xs={12} className="col-steps">
          <h1 className="title-green">Saldo Invertido</h1>
        </Grid>
        <Grid xs={12}>
          <div className="box-purple">
            <h3 className="saldo"> $ {funds} </h3>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={0} className="container-step4">
        <Grid xs={12} className="grid-top-step4">
          <h1 className="text-green-step step4-text">
            Guuru ya esta preparando tu vault!
          </h1>
        </Grid>
        <Grid xs={12} className="grid-mascot">
          <img src={Mascota} alt="" width="25%" />
        </Grid>
        <Grid xs={12}>
          <h1 className="text-green-step step4-text">
            Te avisaremos cuando haya sido armado
          </h1>
        </Grid>
        <Grid xs={12} className="flex-grid">
          <label className="text-vault-id">Tu vault ID :</label>

          <label className="text-vault-nro">&nbsp;&nbsp;{lastElement.slice(-6)}</label>
        </Grid>
        <Grid xs={12} className="flex-grid-pendiente">
          <Button disabled className="btn-pendiente"> Solicitud Pendiente</Button>
          <img src={Reloj} alt="" width="8%" />
        </Grid>
        <Grid xs={12} className="flex-grid-pendiente last">
          <Link to='/step1'>
            <button className="btn-armar"> Armar otro vault</button>
          </Link>
          
          <button className="btn-cancelar" onClick={deleteVault}> Cancelar solicitud</button>
        </Grid>
      </Grid>
    </>
  );
};

export default Step4;
