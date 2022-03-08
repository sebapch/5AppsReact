import React from 'react'
import './Early.css';
import { Row, Col, Container } from 'react-bootstrap';
import LogoOficial from '../../assets/LogoOficial.svg';
import Mascota from '../../assets/Mascota.svg'
import Instagram from '../../assets/icons/Instagram.svg';
import Telegram from '../../assets/icons/Telegram.svg';
import Twitter from '../../assets/icons/Twitter.svg';
import Whatsapp from '../../assets/icons/Whatsapp.svg';

const Early = () => {
  return (
    <div className='background'>
    <Container >
        <Row gutter={16} >
          <Col className="gutter-row icons-early" sm={12} >
            <img src={Instagram} className="icon" style={{ color: 'white', width: "100px" }} alt='' />
            <img src={Telegram} className="icon" style={{ color: 'white', width: "100px" }} alt='' />
            <img src={Twitter} className="icon" style={{ color: 'white', width: "100px" }} alt='' />
            <img src={Whatsapp} className="icon" style={{ color: 'white', width: "100px" }} alt='' />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={6} sm={12} md={6}>
            <img src={LogoOficial} style={{ color: 'white' }} alt='' />
            <p className="text-early">
              Guru es una plataforma ideada para romper la barrera de entrada al mundo de las criptomonedas
              y traer las oportunidades de inversion que este ofrece a todas las personas, sin
              importar su capacidad de inversion.
            </p>
            <Row className="row-btn">
              <Col>
                <button className="btn-litepaper">Litepaper</button>
              </Col>
              <Col>
                <button className="btn-launch">Launch App</button>
              </Col>
            </Row>
          </Col>
          <Col className="gutter-row img-flex" span={6}>
            <img src={Mascota} style={{ color: 'white' }} alt='' className="img-logo"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Early