import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../../context/userContext';
import { Container, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Row, Col } from "react-bootstrap";
import CargarSaldo from '../../../assets/icons/CargarSaldo.svg';
import GuuruVioleta from '../../../assets/guuruVioleta.svg';
import HistorialAzul from '../../../assets/icons/HistorialAzul.png';


const Profile = () => {

    const { userData, setUserData } = useContext(UserContext);
    const user = userData.user?.displayName;

    return (
        <>
            <Container className='profile-container'>
                <Grid  >
                    <Grid item xs={12}>
                        <h1 className='welcome'>Guuru Tag: &nbsp; <label className='user-label'>{user}</label></h1>
                    </Grid>
                    <Grid className='center-profile'>
                        <div className='background-profile'>
                            <Row className='top-row'>
                                <Col className='top-col'>
                                    <Stack>
                                        <label className='top-text'>Mis Vaults</label>
                                        <label className='top-number'>$ 1200</label>
                                    </Stack>
                                </Col>
                                <Col className='top-col-2'>
                                    <Stack>
                                        <label className='top-text'>Sin invertir</label>
                                        <label className='top-number'>$ 100</label>
                                    </Stack>
                                </Col>
                            </Row>
                            <Row className='middle-row'>
                                <Col className='middle-col'>
                                    <Stack>
                                        <label className='balance-text'>Balance Total</label>
                                        <label className='balance-number'>$ 1300</label>
                                    </Stack>
                                </Col>
                            </Row>
                            <Row className='bottom-row'>
                                <Col className='center-col'>
                                    <Stack>
                                        <Link to='/step1' >
                                        <img src={GuuruVioleta} alt="" width='100%' />
                                        <label className='bottom-text'>invertir</label>
                                        </Link>
                                    </Stack>
                                </Col>
                                <Col className='center-col'>
                                    <Stack>
                                        <Link to="/depositar">
                                            <img src={CargarSaldo} alt="" width='100%' />
                                            <label className='bottom-text'>depositar saldo</label>
                                        </Link>
                                    </Stack>
                                </Col>
                            </Row>
                        </div>
                    </Grid>
                    <Grid className='cambio-grid'>
                        <div className='border-cambio'>
                            <label className='dolar-hoy'>Dolar Hoy: <label className='coin'>1 USDT </label> = <label className='coin'>0.89 EUR </label></label>
                        </div>
                        <img src={HistorialAzul} alt="" width='25px' style={{marginTop: "2%"}}/>
                    </Grid>
                </Grid>

            </Container>

        </>
    )
}

export default Profile