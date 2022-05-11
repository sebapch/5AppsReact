import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../../context/userContext";
import Grid from "@mui/material/Grid";
import DrawerLayout from '../../layout/Drawer/DrawerLayout'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Bag from '../../../assets/icons/bag.svg'
import ConfirmModal from '../../utils/Modal/ConfirmVaultModal';
import { VaultContext } from '../../../context/vaultContext';
import './step3.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import imgStep3 from '../../../assets/imgStep3.png';
import { styled } from '@mui/material/styles';


function valuetext(value) {
  return `${value}°C`;
}

const sliderColor = '#4D0457';


const Step3 = () => {
  const { userData, setUserData } = useContext(UserContext);
  console.log(userData);
  const [saldo, setSaldo] = useState('');
  const [invest, setInvest] = useState('');
  // Modal terms and use
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { funds, setFunds } = useContext(VaultContext);

  const history = useHistory();

  const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#52af77',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });

  useEffect(() => {
    const datos = userData.user?.saldo
    setSaldo(datos)
    console.log(datos)
  }, [userData])

  function handleChange(evt) {
    const value = evt.target.value;
    setInvest(value);
    setFunds(value)
  }

  function handleSlider(value) {
    const valor = value.target.value
    const final = (saldo * (valor / 100));
    setInvest(final);
    setFunds(final);
  }

  return (
    <>

      {userData.user ? (
        <Grid>
          <Grid xs={12} className='col-steps'>
            <img src={imgStep3} alt="" className="img-step" />

          </Grid>
          <Grid item xs={12}>
            <h1 className="title-green" style={{ fontSize: '30px' }}>
              Saldo Disponible
            </h1>
          </Grid>
          <Grid item xs={12}>
            <div className="box-purple">
              <h3 className="saldo"> $ {saldo} </h3>
            </div>
          </Grid>


          <div className="center-input">
            <Box sx={{ flexGrow: 1 }} className="div-input">
              <Grid container spacing={2} columns={12} className='grid-cont-input'>
                <Grid item xs={5} className="bag">
                  <img src={Bag}  />
                </Grid>
                <Grid item xs={7} className='input-amount'>
                  <input type='number' onChange={handleChange} value={invest} placeholder='Saldo a Invertir' className='the-input' />
                </Grid>
                <Grid item xs={12}>
                  <PrettoSlider
                    aria-label="Temperature"
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    color='primary'
                    step={10}
                    marks
                    min={10}
                    max={100}
                    onChange={handleSlider}
                  />
                </Grid>
              </Grid>
            </Box>

          </div>



          <Grid md={12}>
            <label className="tarifa">Tarifa de armado = 1%</label>
          </Grid>
          <Grid md={12}>
            <label className="disclaimer">
              Disclaimer: el mercado de criptomonedas es un mercado con mucho riesgo
              y volatilidad. Guuru no es un asesor financiero y no se responsabiliza por las
              posibles perdidas de valor que los activos puedan experimentar debido
              a los movimientos del mercado. Al utilizar Guuru, todos los usuarios aceptan
              bloquear sus fondos entendiendo dichos riesgos
            </label>
          </Grid>
          <Grid md={12}>
            <FormControlLabel control={<Checkbox />} label="Aceptar" />

          </Grid>
          <Grid md={12}>
            <div className="btn-step3">
              <button className="custom-btn btn-atras" onClick={() => history.goBack()}>Atras</button>
              <button className="custom-btn btn-siguiente" onClick={handleOpen}>
                Siguiente
              </button>
            </div>
            <ConfirmModal open={open} handleClose={handleClose} />
          </Grid>
        </Grid>
      ) : (
        <h1>No existe</h1>
      )}
    </>
  );
};

export default Step3;
