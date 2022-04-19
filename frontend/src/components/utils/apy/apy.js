import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import cEuro from '../../../assets/coins/cEURO.svg'
import UST from '../../../assets/coins/UST.svg'
import './apy.css'
import switchTo from '../switch/switchTo'
import InfoModal from '../Modal/Modal'
import infoVerde from '../../../assets/icons/infoVerde.svg'

const titulo = '¿Que es el APY?';
const subtitulo = 'El APY (Annual Percentage Rate) o tasa de porcentaje anual, representa el interes anual que se gana por prestar tu dinero a un banco, o en este caso, a Guuru. Mucha gente no lo sabe pero, cuando pones tu dinero a plazo fijo en un banco, en realidad se lo estas prestaondo. Como recompensa por ese préstamo, el banco promete devolverte un % anual en base a la cantidad de dinero que le prestaste y el periodo por el  que lo hiciste. En Guuru es igual. Salvo que en el mundo cripot existen diferentes monedas, por lo que a su vez existen diferentes tasas. Las cuales suelen ser mucho mayores que las opciones bancarias ';


const APY = () => {

    // Modal terms and use
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <Container className='container-apy'>
                <Row className='row-apy'>
                    <Col className='icons-apy' xs={3} >
                        <img src={cEuro} style={{ width: '120px' }} alt='' className='img-round-logo' />

                    </Col>
                    <Col xs={6} className='apy-round'>
                        <p className='apy-text'>Apy <br />45%</p> <br/>
                        <img src={infoVerde} alt='' width='25%' onClick={handleOpen} />
                        <InfoModal open={open} handleClose={handleClose} title={titulo}
                        subtitle={subtitulo} />

                    </Col >
                    <Col className='icons-apy' xs={3}>
                        <img src={UST} alt='' style={{ width: '120px' }} className='img-round-logo' />
                    </Col>
                </Row>
            </Container>



        </>
    )
}

export default APY