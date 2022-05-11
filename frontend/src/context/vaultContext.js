import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import userContext from './userContext';
export const VaultContext = createContext();



export const VaultProvider = ({ children }) => {

  const [vault, setVault] = useState('')
  const [stable, setStable] = useState('')
  const [timelock, setTimelock] = useState('')
  const [autoRenew, setAutoRenew] = useState(true)
  const [funds, setFunds] = useState(0)
  const [activated, setActivated] = useState(false)
  const {userData} = useContext(userContext)

  const saveVaults = () => {
    axios.post('/users/api/vaults', {
      vault,
      stable,
      timelock,
      autoRenew,
      funds,
      activated,
      userId : userData.user?.id || userData
    })
      .then(res => {
        console.log(res)
      }
      ).catch(err => {
        console.log(err)
      })
  }

  return (
    <VaultContext.Provider value={{
      vault, setVault, stable, setStable,
      timelock, setTimelock, autoRenew, setAutoRenew,
      funds, setFunds, saveVaults
    }}>
      {children}
    </VaultContext.Provider>
  )
}


