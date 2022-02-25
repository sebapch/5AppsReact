import React from 'react'
import Paso1 from './Paso1'
import Carrousel from './Carrousel'

const Step1 = () => {
  return (
      <>
        <Paso1 />
        <h1 className='title'>Elegi el tipo de Vault que quieras armar</h1>
        <Carrousel />
        <h4 className='info'>Info</h4>

            </>
  );
};

export default Step1;