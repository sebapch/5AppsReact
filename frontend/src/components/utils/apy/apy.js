import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import cEuro from '../../../assets/coins/cEURO.svg'
import UST from '../../../assets/coins/UST.svg'
import './apy.css'
import switchTo from '../switch/switchTo'

const APY = () => {
    return (
        <>
        <Container className='container-apy'>
            <Row className='row-apy'>
                <Col className='icons-apy' xs={3} >
                <img src={cEuro} style={{width: '120px'}}  alt='' className='img-round-logo' />

                </Col>
                <Col xs={6} className='apy-round'>
                    <p className='apy-text'>Apy <br/>45%</p>
            
                </Col >
                <Col className='icons-apy'  xs={3}>
                <img src={UST} alt='' style={{width: '120px'}} className='img-round-logo' />
                </Col>
            </Row>
        </Container>
        

        
        </>
    )
}

export default APY