import React from 'react';
import Dashboard from '../Dashboard'
import {Form, Input, Radio, Select, Button, DatePicker} from 'antd'

function Forms(){
	function submitForm(values){
		console.log(values)
	}

	return(
		<Dashboard>
			<div>
				<h3 className='ml-2'><b>Forms with validation</b></h3>
				<Form layout='vertical' className='p-2 form' onFinish={submitForm}>
					<Form.Item label="First Name" name='firstName' required rules={[{required: true , min: 2}]}>
						<Input />
					</Form.Item>

					<Form.Item label="Last Name" name='lastName' required rules={[{required: true , min: 2}]}>
						<Input />
					</Form.Item>

					<Form.Item label="Email" name='email' required rules={[{required: true , type: 'email'}]}>
						<Input />
					</Form.Item>

					<Form.Item label="Gender" name='gender' required rules={[{required: true}]}>
						<Radio.Group>
							<Radio value='male'>Male</Radio>
							<Radio value='Female'>Female</Radio>
						</Radio.Group>
					</Form.Item>

					<Form.Item label="Date of Birth" name='dob' required rules={[{required: true }]}>
						<DatePicker />
					</Form.Item>

					<Form.Item label="Department" name='department' required rules={[{required: true}]}>
						<Select>
							<Radio value='computers'>Computers</Radio>
							<Radio value='electrical'>Electrical</Radio>
							<Radio value='civil'>Civil</Radio>
							<Radio value='mechanical'>Mechanical</Radio>
						</Select>
					</Form.Item>

					<Form.Item label="Address" name='address' required rules={[{required: true , min: 10}]}>
						<Input.TextArea style={{width: '100%' }}/>
					</Form.Item>	

					<Button htmlType="submit" type="primary">
						Register
					</Button>

				</Form>
			</div>
		</Dashboard>

	)
}

export default Forms