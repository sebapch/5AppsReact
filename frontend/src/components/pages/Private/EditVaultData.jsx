import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Grid from '@mui/material/Grid';
import { useParams, Link } from 'react-router-dom'

const EditVaultData = () => {
    const [vault, setVault] = useState([]);
    const { id, vaultid } = useParams();


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

    console.log(id);
    console.log(vaultid);
    console.log(vault);
    return (
        <>
            <Grid container >
                {vault.vaults?.map((vault) => (
                    (vault._id === '628578544576e6f7cef2c788') ? (
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
                            {vault.coins?.map((coin) => (
                                <>
                                    <label>{coin.name}</label>
                                    <input type="text" defaultValue={coin.amount} />
                                </>
                            ))}
                            
                        </Grid>
                            
                            
                        </>

                    )
                        : null
                ))}


            </Grid>

        </>
    )
}

export default EditVaultData