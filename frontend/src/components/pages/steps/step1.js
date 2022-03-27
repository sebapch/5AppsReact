import React, { useState } from "react";
import APY from "../../utils/apy/apy";
import SwitchTo from "../../utils/switch/switchTo";
import { Carousel } from 'react-bootstrap';
import Divider from "@mui/material/Divider";
import Big4 from '../../../assets/Big4.png'
import BSC from '../../../assets/BSC.png'
import Estable from '../../../assets/Estable.png'
import "./steps.css";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { Container, Row, Col } from "react-bootstrap";
import ApyCripto from '../../utils/ApyCripto/ApyCripto'

const Step1 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    
  };

  console.log(index)

  return (
    <>
      <Header />
      <Container>
        <Row className="row-pasos">
          <Col xs={12} className="col-pasos">
            <p className="paso paso1">1</p>

            <p className="paso paso2">2</p>
            <p className="paso paso3">3</p>
          </Col>
        </Row>
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
              <img className="d-block w-100" src={Estable} alt="First slide" />
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

            {index === 0 ? <><APY/><SwitchTo /></> : <ApyCripto/>}
       
          </Col>
        </Row>
        
        <Row>
          <Col xs={12}>
            <div className="btn-div">
              <button className="custom-btn btn-atras">Atras</button>
              <button className="custom-btn btn-siguiente">Siguiente</button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Step1;
