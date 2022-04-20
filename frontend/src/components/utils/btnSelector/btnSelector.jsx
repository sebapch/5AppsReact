import React, { useState, useContext, useEffect } from 'react'
import { Button, Grid } from '@mui/material'
import { VaultContext } from '../../../context/vaultContext'
import './btnSelector.css'

const BtnSelector = () => {
    const [activeStable, setActiveStable] = useState('USDT');
    const { stable, setStable } = useContext(VaultContext);
    console.log(stable)

    useEffect(() => {
        setStable('USDT')
      }, []);

    return (
        <>
            <Grid className='grid-btn'>
                <Button className={stable === 'cEURO' ? "btn-stable-selected" : "btn-stable"} onClick={() => setStable('cEURO')}>
                    cEURO
                    </Button>
                <Button className={stable === 'USDT' ? "btn-stable-selected" : "btn-stable"} onClick={() => setStable('USDT')}>USDT</Button>
            </Grid>
        </>
    )
}

export default BtnSelector