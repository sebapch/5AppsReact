import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../../context/userContext";

const VaultsSum = () => {
  const [cryptos, setCryptos] = useState([]);
  const { userData, setUserData } = useContext(UserContext);
  const [sumVaults, setSumVaults] = useState(0);
    let total = 0;
    const uservaults = userData.user?.vaults


  const getSumOfFundsInUSD = () => {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,ADA,BNB,Cake,LAND,BSW,&tsyms=USD"
      )
      .then((res) => {
        const cryptos = res.data;
        setCryptos(cryptos);
      });
  };
  useEffect(() => {
    getSumOfFundsInUSD();
    getSumOffFunds();
  }, [uservaults]);

  const getSumOffFunds = () => {
    let totalF = 0;
    if (uservaults) {
      uservaults.map(vault => {
        console.log(vault.funds)
        vault.coins.map(coin => {
          
          if (coin.coin !== 'USDT' && coin.coin !== 'cEuro') {
            console.log(cryptos[coin.coin]?.USD)
            
            console.log(total)
            totalF +=  cryptos[coin.coin]?.USD * coin.quantity
            setSumVaults(totalF);
          }
          else {
            totalF += coin.quantity
            setSumVaults(totalF);
          }
        })
      }
      )
  }}



  console.log(cryptos);
  console.log(userData);
  console.log(sumVaults);
  return (
    <>
      <h1>{sumVaults.toFixed(2)}</h1>
    </>
  );
};

export default VaultsSum;
