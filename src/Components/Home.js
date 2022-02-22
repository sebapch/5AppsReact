import React from 'react';
import Dashboard from '../Dashboard';
import {Row, Col, Divider, Button} from 'antd';
import Mascota from '../assets/Mascota.svg';
import './Home.css';

function Home(){
	return(
		<Dashboard>

			<Row justify="center" className='home'>
				<Col>
				<h1 className='title-green'>Saldo Disponible</h1>
				</Col>
				<Divider />
				<Col>
				<div className='box-purple'>
					<h3 className='saldo'> $ 950 </h3>
				</div>
				</Col>
			</Row>
			<Divider />
			<div className='home-section'>
				<h3 className='subtitle-home'>Relajate y deja que Guuru trabaje por vos</h3>
				<img src={Mascota} alt='' className='img-round'/>
				<h4 className='text-purple'>Ommmm.....</h4>
				<h4 className='text-green'>¿Como Funciona?</h4>
				<h4 className='text-blue'> Listo para invertir</h4>
				<button className="custom-btn btn-atras">
					Atras
				</button>
				<button className="custom-btn btn-siguiente">
					Siguiente
				</button>					

			</div>
		


		</Dashboard>
	)
}

export default Home;