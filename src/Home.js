import React from 'react';
import Dashboard from './Dashboard';
import {Row, Col} from 'antd';

function Home(){
	return(
		<Dashboard>

			<Row justify="center" className='home'>
				<Col lg={10} sm={24}>
				<img src="https://images.pexels.com/photos/7213434/pexels-photo-7213434.jpeg" width="500px" alt='' />
				</Col>
				<Col lg={24} sm={24}>
					<h3 style={{color: 'tomato'}}>
						<b>Hey Soy Seba.</b>
					</h3>
					<p>I am a FullStack Web Developer / Freelancer. I use React, Redux as Front-End and Node + Express as Backend 
					and Mongo DB as Database for Web Applications. Solidity, Flutter and Firebase for blockchain and mobile Applications.
					Currently I am looking for an opportunity to work as a Front-End / React developer or MERN Stack Developer.</p>
				</Col>
			</Row>
			<h1>Home</h1>


		</Dashboard>
	)
}

export default Home;