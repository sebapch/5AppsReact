import React from "react";
import "./ApyCripto.css";
import BTC from "../../../assets/coins/BTC.svg";
import ADA from "../../../assets/coins/ACS.svg";
import ETH from "../../../assets/coins/Ethereum.svg";
import BNB from "../../../assets/coins/BNB.svg";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import infoVioleta from "../../../assets/icons/infoVerde.svg"


const ApyCripto = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} className="flexCripto">
          <img src={BTC} alt="" className="criptoIcon" />
          <img src={ADA} alt="" className="criptoIcon" />
        </Grid>
        <Grid item xs={12} className="flexApy">
            <Stack className="apyBack">
            <label>APY </label>
            <label>37%</label>
            <img src={infoVioleta} alt='' width='20%' />
            </Stack>
          
        </Grid>
        <Grid item xs={12} className="flexCripto">
          <img src={ETH} alt="" className="criptoIcon" />
          <img src={BNB} alt="" className="criptoIcon" />
        </Grid>
      </Grid>
    </>
  );
};

export default ApyCripto;
