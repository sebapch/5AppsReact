import React, { useState, useContext, useEffect } from "react";
import APY from "../../utils/apy/apy";
import SwitchTo from "../../utils/switch/switchTo";
import { Carousel } from "react-bootstrap";
import Divider from "@mui/material/Divider";
import Big4 from "../../../assets/Big4.png";
import BSC from "../../../assets/BSC.png";
import imgStep1 from "../../../assets/imgStep1.png";
import Estable from "../../../assets/Estable.png";
import StableEURO from "../../../assets/stableEURO.png";
import StableUSDT from "../../../assets/stableUSDT.png";
import Big4Vault from '../../../assets/Big4Vault.png'
import BSCVault from '../../../assets/BSCVault.png'
import { Container, Row, Col } from "react-bootstrap";
import ApyCripto from "../../utils/ApyCripto/ApyCripto";
import { useHistory, Link } from "react-router-dom";
import { VaultContext } from "../../../context/vaultContext";
import StepsCount from "../../utils/stepsCount/stepsCount";
import BtnSelector from "../../utils/btnSelector/btnSelector";
import './steps.css';
import './step1.css';

const Step1 = () => {
  const [index, setIndex] = useState(0);
  const history = useHistory();

  const { vault, setVault, stable, setStable } = useContext(VaultContext);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    setVault(0)
  }, []);

  console.log("Vault Seleccionado: " + index);

  function handleClick() {
    setVault(index);
  }

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="col-steps">
            <img src={imgStep1} alt="" className="img-step" />
          </Col>
          <Col xs={12}>
            <p className="text-green-step">
              Elegí el tipo de Vault que quieras armar
            </p>
          </Col>
        </Row>
        <Row className="row-centered">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={null}
            className="carrousel"
            variant="dark"
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Estable}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Big4} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={BSC} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
          <Col xs={12}>
            <p className="info-text">Info</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className='col-select-vault'>


            {index === 0 ? (
              <>
                {/*  <APY /> */}

                <div className="container">
                  <img src={stable === 'USDT' ? StableUSDT : StableEURO} alt="" className="img-stable" />
                  <div class="centered">45% APY</div>
                </div>
                {/* <SwitchTo /> */}
                <BtnSelector />
              </>
            ) : (
              index === 1 ? (
                <div className="container">
                  <img src={Big4Vault} alt="" className="img-stable" />
                  <div class="centered">45% APY</div>
                </div>

              ) : (
                <div className="container">
                  <img src={BSCVault} alt="" className="img-stable" />
                  <div class="centered">45% APY</div>
                </div>
              )
            )}
          </Col>
        </Row>
        
        <Row>
          <Col xs={12} className='btn-grid'>
              <button className="custom-btn btn-atras" onClick={() => history.goBack()}>Atras</button>
              <Link to="/step2" className="links-footer">
                <button
                  className="custom-btn btn-siguiente"
                  onClick={handleClick}
                >
                  Siguiente
                </button>
              </Link>
          </Col>
          
        </Row>
      </Container>
    </>
  );
};

export default Step1;
