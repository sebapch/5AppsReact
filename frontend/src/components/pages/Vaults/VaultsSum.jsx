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
  }, []);


  console.log(cryptos);
  console.log(userData);
  console.log(sumVaults);
  return (
    <>
      <div className="cryptos">
        {Object.keys(cryptos).map((key) => (
          <div key={key}>
            <span>{key}</span>
            <span>&nbsp;{cryptos[key].USD}</span>
          </div>
        ))}
      </div>
      <div className="vaultsSUM">
        {userData.user?.vaults.map((vault, index) => (
          <div key={index}>
            <span>fondos : {vault.funds}</span>
            {vault?.coins.map((coin, index) => (
                
              <div key={index}>
                <span>{coin.coin}</span>
                <span>&nbsp;{coin.quantity}</span>
                {/* compare coin.coin with cryptos and check if the same value */}
                
                <h3>{coin.coin !== 'USDT' && coin.coin !== 'cEuro' && cryptos[coin.coin]?.USD * coin.quantity}</h3>
                
                    {
                (coin.coin !== 'USDT' && coin.coin !== 'cEuro') ? total +=  cryptos[coin.coin]?.USD * coin.quantity : 'return igual'
                }
               
                
                    
                
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default VaultsSum;
