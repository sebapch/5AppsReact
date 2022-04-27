import React, { useState, useContext, useEffect } from 'react'
import { Button, Grid } from '@mui/material'
import './btnVaults.css'

const BtnVaults = () => {
    const [activeTab, setActiveTab] = useState('TODO');


    useEffect(() => {
        setActiveTab('TODO')
      }, []);

    return (
        <>
            <Grid className='grid-btn-vault'>
                <Button className={activeTab === 'TODO' ? "btn-vault-selected" : "btn-vault"} onClick={() => setActiveTab('TODO')}>
                    TODO
                    </Button>
                <Button className={activeTab === 'Estable' ? "btn-vault-selected" : "btn-vault"} onClick={() => setActiveTab('Estable')}>Estable</Button>
                <Button className={activeTab === 'Big4' ? "btn-vault-selected" : "btn-vault"} onClick={() => setActiveTab('Big4')}>Big4</Button>
                <Button className={activeTab === 'BSC' ? "btn-vault-selected" : "btn-vault"} onClick={() => setActiveTab('BSC')}>BSC</Button>
            </Grid>
        </>
    )
}

export default BtnVaults

