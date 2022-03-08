import React from 'react'
import './Early.css';
import { Row, Col, Container } from 'react-bootstrap';
import LogoFondoClaro from '../../assets/LogoFondoClaro.svg';
import Mascota from '../../assets/Mascota.svg'
import Instagram from '../../assets/icons/Instagram.svg';
import Telegram from '../../assets/icons/Telegram.svg';
import Twitter from '../../assets/icons/Twitter.svg';
import Whatsapp from '../../assets/icons/Whatsapp.svg';

const Early = () => {
  return (
    <>
    <Container className='background'>
        <Row gutter={16} >
          <Col className="gutter-row icons-early" span={6}>
            <img src={Instagram} style={{ color: 'white', width: "100px" }} alt='' />
            <img src={Telegram} style={{ color: 'white', width: "100px" }} alt='' />
            <img src={Twitter} style={{ color: 'white', width: "100px" }} alt='' />
            <img src={Whatsapp} style={{ color: 'white', width: "100px" }} alt='' />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <img src={LogoFondoClaro} style={{ color: 'white' }} alt='' />
            <p>
              Guru es una plataforma ideada para romper la barrera de entrada al mundo de las criptomonedas
              y traer las oportunidades de inversion que este ofrece a todas las personas, sin
              importar su capacidad de inversion.
            </p>
            <Row>
              <Col>
                <button>Litepaper</button>
              </Col>
              <Col>
                <button>Launch App</button>
              </Col>
            </Row>
          </Col>
          <Col className="gutter-row" span={6}>
            <img src={Mascota} style={{ color: 'white' }} alt='' />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Early