import React, {createContext, useState} from 'react';

export const VaultContext = createContext();




export const VaultProvider = ({ children }) => {
    const [vault, setVault] = useState('')
    const [stable, setStable] = useState('')
    const [timelock, setTimelock] = useState('')
    const [autoRenew, setAutoRenew] = useState(true)
    const [funds, setFunds] = useState(0)

  return (
    <VaultContext.Provider value={{
        vault, setVault, stable, setStable,
         timelock, setTimelock, autoRenew, setAutoRenew,
         funds, setFunds
    }}>
        { children }
    </VaultContext.Provider>
  )
}


  