import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../../context/userContext";



const VaultsSum = () => {
  const [cryptos, setCryptos] = useState([]);
  const { userData, setUserData } = useContext(UserContext);
  const [sumVaults, setSumVaults] = useState(0);
  const [loading, setLoading] = useState(false);
  let total = 0;
  const uservaults = userData.user?.vaults;

  async function getSumOfFundsInUSD() {
    await axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,ADA,BNB,Cake,LAND,BSW,&tsyms=USD"
      )
      .then((res) => {
        const cryptos = res.data;
        setCryptos(cryptos);
      });
  }

  const getSumOffFunds = () => {
    setLoading(true);
    let totalF = 0;
    if (uservaults) {
      uservaults.map((vault) => {
        console.log(vault.funds);
        vault.coins.map((coin) => {
          if (coin.coin !== "USDT" && coin.coin !== "cEuro") {
            totalF += cryptos[coin.coin]?.USD * coin.quantity;
            setSumVaults(totalF);
            setLoading(false);
          } else {
            totalF += coin.quantity;
            setSumVaults(totalF);
            setLoading(false);
          }
        });
      });
    }
  };

  useEffect(() => {
    getSumOfFundsInUSD();  
    
  }, [uservaults]);

 useEffect(() => {
    getSumOffFunds();
 }, [cryptos])


  return <>
  {sumVaults && <h1>{sumVaults.toFixed(2)}</h1>}
  
  </>;
};

export default VaultsSum;
