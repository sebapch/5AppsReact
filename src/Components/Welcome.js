import React from 'react'
import LogoFondoClaro from '../assets/LogoFondoClaro.svg'
import Dashboard from '../Dashboard'
import './Welcome.css'
import {Row, Col, Divider} from 'antd';

const Welcome = () => {
    return (
        <>
            <Dashboard>
                           
                <div className='background'>        
                        <img src={LogoFondoClaro} alt='' className='banner-welcome' />

                        <button className="custom-btn btn-atras">
                            LOGIN
                        </button>
                        <button className="custom-btn btn-siguiente">
                            SIGN UP
                        </button>               
                    </div>

            </Dashboard>
        </>
    )
}

export default Welcome