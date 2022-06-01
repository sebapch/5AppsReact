import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import userContext from './userContext';
export const VaultContext = createContext();



export const VaultProvider = ({ children }) => {

  const [vault, setVault] = useState('')
  const [stable, setStable] = useState('')
  const [timelock, setTimelock] = useState(30)
  const [autoRenew, setAutoRenew] = useState(true)
  const [funds, setFunds] = useState(0)
  const [activated, setActivated] = useState(false)
  const [endDate, setEndDate] = useState('nollego')
  const {userData} = useContext(userContext)
  

  
  const saveVaults = async() => {
    
    await axios.post('/users/api/vaults', {
      vault,
      stable,
      timelock,
      autoRenew,
      endDate,
      funds,
      activated,
      coins: [{coin: 'USDT', quantity: 0}, {coin: 'cEuro', quantity: 0},{coin: 'BTC', quantity: 0}, {coin: 'ETH', quantity: 0}, {coin: 'ADA', quantity: 0}, {coin: 'BNB', quantity: 0},{coin: 'CAKE', quantity: 0},{coin: 'LAND', quantity: 0},{coin: 'BSW', quantity: 0}],
      userId : userData.user?._id || userData
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
      funds, setFunds, saveVaults, endDate, setEndDate
    }}>
      {children}
    </VaultContext.Provider>
  )
}


