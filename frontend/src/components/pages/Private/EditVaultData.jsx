import React, { useState, useEffect, useContext } from 'react'
import Axios from 'axios';
import {Grid, Input, Button } from '@mui/material';
import { useParams, Link } from 'react-router-dom'
import { VaultContext } from "../../../context/vaultContext";


const EditVaultData = () => {
    const [vault, setVault] = useState('');
    const [timeTo, setTimeTo] = useState();
    const [endDays, setEndDays] = useState('');
    const { id, vaultid } = useParams();
    const [usdt, setUsdt ] = useState(0);
    const [btc, setBtc ] = useState(0);
    const [eth, setEth ] = useState(0);
    const [ceuro, setCeuro ] = useState(0);
    const [ada, setAda ] = useState(0);
    const [bnb, setBnb ] = useState(0);
    const [cake, setCake ] = useState(0);
    const [land, setLand ] = useState(0);
    const [bsw, setBsw ] = useState(0);
    let coins = [{coin: 'USDT', quantity: usdt}, {coin: 'BTC', quantity: btc}, {coin: 'ETH', quantity: eth}, {coin: 'cEuro', quantity: ceuro}, {coin: 'ADA', quantity: ada}, {coin: 'BNB', quantity: bnb}, {coin: 'CAKE', quantity: cake}, {coin: 'LAND', quantity: land}, {coin: 'BSW', quantity: bsw}];

    const saveCoins = () => {
        Axios.post(`/users/api/vaults/${id}/${vaultid}`, {
            coins
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleChange = (newQuantity, index) => {
        console.log(index, newQuantity);
        switch(index){
            case 0:
                setUsdt(newQuantity);
                break;
            case 1:
                setBtc(newQuantity);
                break;
            case 2:
                setEth(newQuantity);
                break;
            case 3:
                setCeuro(newQuantity);
                break;
            case 4:
                setAda(newQuantity);
                break;
            case 5:
                setBnb(newQuantity);
                break;
            case 6:
                setCake(newQuantity);
                break;
            case 7:
                setLand(newQuantity);
                break;
            case 8:
                setBsw(newQuantity);
                break;
            default:
                break;
        }

    }

    async function traerVault() {
        await Axios.get(`/users/api/vaults/${id}/${vaultid}`)
            .then(res => {
                setVault(res.data)
               
                res.data.vaults.map(vault => {
                    if(vault._id === vaultid){
                        console.log(vault)
                        console.log(vault.timelock)
                        setTimeTo(vault.timelock)
                        vault.coins.map((vault, index) => {
                            switch(index){
                                case 0:
                                    setUsdt(vault.quantity);
                                    break;
                                case 1:
                                    setBtc(vault.quantity);
                                    break;
                                case 2:
                                    setEth(vault.quantity);
                                    break;
                                case 3:
                                    setCeuro(vault.quantity);
                                    break;
                                case 4:
                                    setAda(vault.quantity);
                                    break;
                                case 5:
                                    setBnb(vault.quantity);
                                    break;
                                case 6:
                                    setCake(vault.quantity);
                                    break;
                                case 7:
                                    setLand(vault.quantity);
                                    break;
                                case 8:
                                    setBsw(vault.quantity);
                                    break;
                                default:
                                    break;
                            }
                        })
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
    }



    function toTimestamp(strDate){
        var datum = Date.parse(strDate);
        return datum/1000;
     }

     function setEnd(){
        var today = new Date();
        var priorDate = new Date(new Date().setDate(today.getDate() + timeTo));
        setEndDays(toTimestamp(priorDate));
     }


    useEffect(() => {
        traerVault();
    }, []);

    useEffect(() => {
        setEnd();
    }, [timeTo]); 

    async function activateVault(vault) {
        await Axios.post(`/users/api/activate/${id}/${vault}`, {
            userId: id,
            vaultId: vault,
            endDate: endDays
          })
            .then(res => {
              console.log(res)
            })
            .catch(err => {
              console.log(err)
            })
            
        }

        console.log(endDays);
    return (
        <>
            <Grid container >
                {vault.vaults?.map((vault) => (
                    (vault._id === vaultid) ? (
                        <>
                        <Grid className='d-flex flex-column'>
                            <h1>Vault ID : {vault._id}</h1>
                            <label>Activada: </label>
                            <input type="text" defaultValue={vault.activated} />                            
                            <label>Auto Renovar: </label>
                            <input type="text" defaultValue={vault.autoRenew} />                           
                            <label>Valor: </label>
                            <input type="text" defaultValue={vault.funds} />
                            <label>Valor: </label>
                            <input type="text" defaultValue={vault.funds} />
                            <label>Stable: </label>
                            <input type="text" defaultValue={vault.stable} />
                            <label>Timelock: </label>
                            <input type="text" defaultValue={vault.timelock} />
                            <label>Creada el: </label>
                            <label>{vault.createdAt}</label>
                            <label>Ultima Modificacion: </label>
                            <label>{vault.updatedAt}</label>
                            {(!vault.activated) ? <Button variant="contained" onClick={() => activateVault(vault?._id)}>activar</Button> : null}

                            <label>Coins: </label>
                            <Grid className="d-flex  flex-wrap">
                            {vault.coins?.map((coin, index) => (
                                <>
                                <Grid item md={4} className='d-flex flex-column align-items-center'>
                                    <label>{coin.coin}</label>
                                    
                                    
                                    <input type="text" key={index} defaultValue={coin.quantity}  className='w-50' onChange={(e) => handleChange(e.target.value, index)} />
                                    </Grid>
                                </>
                            ))}
                            </Grid>
                        </Grid>
                            
                            <button onClick={saveCoins}>GUARDAR Monedas</button>
                        </>

                    )
                        : null
                ))}


            </Grid>

        </>
    )
}

export default EditVaultData