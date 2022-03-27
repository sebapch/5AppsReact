import React, { useContext } from "react";
import UserContext from "../../../context/userContext";
import Grid from "@mui/material/Grid";

const Step3 = () => {
  const { userData, setUserData } = useContext(UserContext);
  console.log(userData);

  return (
    <>
      {userData.user ? (
        <Grid>
          <Grid md={12}>
            <h1 className="title">Saldo Disponible</h1>
          </Grid>
          <Grid md={12}>
          <label>$ {userData?.user.displayName}</label>
          </Grid>
          <Grid md={12}>
          <input type="text" />
          </Grid>
          <Grid md={12}>
            <label>Tarifa de armado = 1%</label>
          </Grid>
          <Grid md={12}>
            Disclaimer: el mercado de criptomonedas es un mercado con mucho riesgo 
            y volatilidad. Guuru no es un asesor financiero y no se responsabiliza por las 
            posibles perdidas de valor que los activos puedan experimentar debido
            a los movimientos del mercado. Al utilizar Guuru, todos los usuarios aceptan
            bloquear sus fondos entendiendo dichos riesgos

          </Grid>
          <Grid md={12}>
            <p>Aceptar</p>
          </Grid>
          <Grid md={12}>
            <button>Atras</button>
            <button>Confirmar</button>
          </Grid>
          
          
        </Grid>
      ) : (
        <h1>No existe</h1>
      )}
    </>
  );
};

export default Step3;
