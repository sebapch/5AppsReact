import React, {useContext} from 'react'
import { Grid } from '@mui/material'
import UserContext from '../../../context/userContext';
import Mascota from '../../../assets/Mascota.png';
import Reloj from '../../../assets/icons/RelojArena.png';

const Step4 = () => {
    const { userData, setUserData } = useContext(UserContext);

  return (
    <>
        <Grid container spacing={0} className='div-saldo'>
            <Grid xs={12} className='col-steps'>
                <h1 className='title-green'>Saldo Invertido</h1>
            </Grid>
            <Grid xs={12}>
                  <div className="box-purple">
                    <h3 className="saldo"> $ 40 </h3>
                  </div>
            </Grid>
        </Grid>
        <Grid container spacing={0}>
            <Grid xs={12}>
                <h1>
                    Guuru ya esta preparando tu vault!
                </h1>
            </Grid>
            <Grid xs={12}>
                <img src={Mascota} alt="" width='100%'/>
            </Grid>
            <Grid xs={12}>
                <h1>
                    Te avisaremos cuando haya sido armado
                </h1>
            </Grid>
            <Grid xs={12}>
                <label>
                    Tu vault ID:
                </label>
                <label>
                    451547
                </label>
            </Grid>
            <Grid xs={12}>
                <button disabled> Solicitud Pendiente</button>
                <img src={Reloj} alt="" width='100%'/>
            </Grid>
            <Grid xs={12}>
                <button> Armar otro vault</button>
                <button> Cancelar solicitud</button>
            </Grid>

        </Grid>
    </>
  )
}

export default Step4