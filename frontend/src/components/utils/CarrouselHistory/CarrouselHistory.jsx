import React, { useState, useContext } from "react";
import UserContext from "../../../context/userContext";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Twitter from "../../../assets/icons/Twitter.svg";
import Big4 from "../../../assets/Big4.png";
import BSC from "../../../assets/BSC.png";
import Estable from "../../../assets/Estable.png";
import "./CarrouselHistory.css";
import InfoAzul from "../../../assets/icons/infoAzul.svg";

const CarrouselHistory = ({ text }) => {
  const [index, setIndex] = useState(0);
  const { userData, setUserData } = useContext(UserContext);
  const vaultsData = userData.user?.vaults;
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  console.log(userData);
  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        className="carrousel"
        variant="dark"
      >
        {vaultsData?.map((vault) => (
          <Carousel.Item key={vault._id}>
            <Grid container className="vault-design">
              <Grid xs={12} className="d-flex justify-content-evenly">
                <label>{vault.activated ? "Activa" : "No Activa"}</label>
                <Link to={`/vaultinfo/${userData.user._id}/${vault._id}`}>
                <img src={InfoAzul} alt="" width="50px" />
                </Link>
              </Grid>
              <Grid item md={12} className="d-flex justify-content-evenly ">
              <Grid xs={4} style={{textAlign: 'center'}}>
                
                  <label >
                    {vault.createdAt && vault.createdAt.substring(0, 10)}
                  </label>
                
              </Grid>
              <Grid xs={4} style={{textAlign: 'center'}}>
                <label >
                  {vault.vault === 0
                    ? "Estable"
                    : vault.vault === 1
                    ? "BTC"
                    : "BSC"}
                </label>
              </Grid>
              <Grid xs={4} style={{textAlign: 'center'}}>
                <label >{vault.funds}</label>
              </Grid>
              </Grid>
            </Grid>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default CarrouselHistory;
