import React from 'react'
import Carrousel from '../../utils/Carrousel'
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
            API
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            SWITCH
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            ATRAS SIGUIENTE
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Step1;