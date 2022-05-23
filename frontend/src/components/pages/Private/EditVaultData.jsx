import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import {Grid, Input } from '@mui/material';
import { useParams, Link } from 'react-router-dom'

const EditVaultData = () => {
    const [vault, setVault] = useState([]);
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
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        traerVault();
    }, []);


    console.log(coins);
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

                            <label>Coins: </label>
                            <Grid className="d-flex  flex-wrap">
                            {vault.coins?.map((coin, index) => (
                                <>
                                <Grid item md={4} className='d-flex flex-column align-items-center'>
                                    <label>{coin.coin}</label>
                                    {console.log(coin.coin)}
                                    
                                    <input type="text" key={index} defaultValue={coin.quantity} className='w-50' onChange={(e) => handleChange(e.target.value, index)}/>
                                    </Grid>
                                </>
                            ))}
                            </Grid>
                        </Grid>
                            
                            <button onClick={saveCoins}>GUARDAR CAMBIOS</button>
                        </>

                    )
                        : null
                ))}


            </Grid>

        </>
    )
}

export default EditVaultData