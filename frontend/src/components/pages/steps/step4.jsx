import React, { useContext } from "react";
import { Grid } from "@mui/material";
import UserContext from "../../../context/userContext";
import Mascota from "../../../assets/Mascota.png";
import Reloj from "../../../assets/icons/RelojArena.png";
import { Button } from "@mui/material";
import "./steps.css";
import "./step4.css";

const Step4 = () => {
  const { userData, setUserData } = useContext(UserContext);

  return (
    <>
      <Grid container spacing={0} className="div-saldo">
        <Grid xs={12} className="col-steps">
          <h1 className="title-green">Saldo Invertido</h1>
        </Grid>
        <Grid xs={12}>
          <div className="box-purple">
            <h3 className="saldo"> $ 40 </h3>
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

          <label className="text-vault-nro">&nbsp;&nbsp;451547</label>
        </Grid>
        <Grid xs={12} className="flex-grid-pendiente">
          <Button disabled className="btn-pendiente"> Solicitud Pendiente</Button>
          <img src={Reloj} alt="" width="8%" />
        </Grid>
        <Grid xs={12} className="flex-grid-pendiente last">
          <button className="btn-armar"> Armar otro vault</button>
          <button className="btn-cancelar"> Cancelar solicitud</button>
        </Grid>
      </Grid>
    </>
  );
};

export default Step4;
