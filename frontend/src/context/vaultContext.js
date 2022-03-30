import React, {createContext, useState} from 'react';

export const VaultContext = createContext();




export const VaultProvider = ({ children }) => {
    const [vault, setVault] = useState('')
    const [stable, setStable] = useState('')

  return (
    <VaultContext.Provider value={{
        vault, setVault, stable, setStable
    }}>
        { children }
    </VaultContext.Provider>
  )
}


  