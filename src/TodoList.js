import React, {useState} from 'react';
import Dashboard from './Dashboard';
import {Row, Col, Input, Button, Modal} from 'antd';

function TodoList(){
	const [inputValue, setInputValue] = useState('')
	const[todoItems, setTodoItems] = useState([])
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [editIndex, setEditIndex] = useState();
	const [editInputValue, setEditInputValue] = useState();


	function addTodoItem(){
		setTodoItems([...todoItems , inputValue])

		console.log(todoItems)
	}
	const showModal = (index) => {
		setEditInputValue(todoItems[index]);
		setEditIndex(index);
    setIsModalVisible(true);
  };

  const editTodoItem = () => {
  	var dupitems = [...todoItems];

  	dupitems[editIndex] = editInputValue 
  	setTodoItems(dupitems)
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function deleteTodoItems(index){
  	var dupitems = [...todoItems];
  	dupitems.splice(index, 1)
  	setTodoItems(dupitems)
  }

	return(

		<Dashboard>
			<div className='todo'>
				<h3 className='text-center'>To do List</h3>
				<Row justify='center'>
					<Col lg={10} sm={24}>
						<div className="flex">
							<Input value={inputValue} onChange={(e)=> {setInputValue(e.target.value)}} placeholder='Enter new item'/>
							<Button className='ml-2' onClick={addTodoItem}>ADD</Button>
						</div>
					</Col>
				</Row>

				<Row justify='center' className='mt-3'>
					<Col lg={10} sm={24} className="bs p-2">
					{todoItems.map((item , index) => {
							return <div className="flex" style={{justifyContent : 'space-between'}}>
								<h3>{item}</h3>
								<div>
									<Button type='primary mr-2' onClick={()=>{showModal(index)}}>Edit</Button>

									<Button type='danger mr-2' onClick={()=>{deleteTodoItems(index)}}>Delete</Button>
								</div>
							</div>
						
					})}
					</Col>
				</Row>
		<Modal title="Edit To Do Item" visible={isModalVisible} onOk={editTodoItem} onCancel={handleCancel} okText='edit'>
        	<Input value={editInputValue} onChange={(e)=>{setEditInputValue(e.target.value)}} />
      </Modal>
			</div>
		</Dashboard>
	)
}

export default TodoList;