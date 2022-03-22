import React from 'react'
import Carrousel from '../../utils/Carrousel'
import APY from '../../utils/apy/apy'
import SwitchTo from '../../utils/switch/switchTo'
import Divider from '@mui/material/Divider';

import './steps.css'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import { Container, Row, Col } from 'react-bootstrap';

const Step1 = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className='row-pasos'>
          <Col xs={12} className='col-pasos'>
            <p className='paso paso1'>1</p>

            <p className='paso paso2' >2</p>
            <p className='paso paso3'>3</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p className='text-green'>Elegí el tipo de Vault que quieras armar</p>
          </Col>
        </Row>
        <Row className='row-centered'>

          <Carrousel />

        </Row>
        <Row>
          <Col xs={12}>
            <p className='info-text'>Info</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            < APY />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <SwitchTo />
          </Col>
          <Col xs={12}>
            <Divider style={{ border: '4px solid black' }} />
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