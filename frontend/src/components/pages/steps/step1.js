import React, { useState, useContext } from "react";
import APY from "../../utils/apy/apy";
import SwitchTo from "../../utils/switch/switchTo";
import { Carousel } from "react-bootstrap";
import Divider from "@mui/material/Divider";
import Big4 from "../../../assets/Big4.png";
import BSC from "../../../assets/BSC.png";
import Estable from "../../../assets/Estable.png";
import "./steps.css";
import DrawerLayout from "../../layout/Drawer/DrawerLayout";
import Footer from "../../layout/Footer";
import { Container, Row, Col } from "react-bootstrap";
import ApyCripto from "../../utils/ApyCripto/ApyCripto";
import { useHistory, Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import { VaultContext } from "../../../context/vaultContext";

const Step1 = () => {
  const [index, setIndex] = useState(0);

  const { vault, setVault } = useContext(VaultContext);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  console.log("Vault Seleccionado: " + index);

  function handleClick() {
    setVault(index);
  }

  return (
    <>
      <DrawerLayout>
        <Container>
          <Row className="row-pasos">
            <Col xs={12} className="col-pasos">
              <div className="icons-pasos">
                <CheckIcon />
                <label className="paso paso1">1</label>
              </div>
              <div className="icons-pasos-middle">
                <CheckIcon />
                <label className="paso paso2">2</label>
              </div>
              <div className="icons-pasos">
                <CheckIcon />
                <label className="paso paso3">3</label>
              </div>
            </Col>
          </Row>
          {JSON.stringify(vault, null, 2)}
          <Row>
            <Col xs={12}>
              <p className="text-green">
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
            <Col xs={12}>
              {/*  {index === 0 ? <APY /> 
            : index === 1 ? "Condition B" 
            : "Neither"} */}

              {index === 0 ? (
                <>
                  <APY />
                  <SwitchTo />
                </>
              ) : (
                <ApyCripto />
              )}
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <div className="btn-div">
                <button className="custom-btn btn-atras">Atras</button>
                <Link to="/step2" className="links-footer">
                  <button
                    className="custom-btn btn-siguiente"
                    onClick={handleClick}
                  >
                    Siguiente
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </DrawerLayout>
    </>
  );
};

export default Step1;
