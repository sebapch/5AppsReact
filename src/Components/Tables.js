import React, {useState} from 'react';
import Dashboard from '../Dashboard';
import {Input , Table} from 'antd';
import moment from 'moment';

function Tables(){

	var peopleData = [
    {
      firstName: "sathya",
      lastName: "reddy",
      gender: "male",
      dob: "08-07-2000",
      marks: 94,
      country: "United States",
    },
    {
      firstName: "john",
      lastName: "bas",
      gender: "male",
      dob: "01-07-2000",
      marks: 75,
      country: "United States",
    },
    {
      firstName: "dany",
      lastName: "malp",
      gender: "female",
      dob: "05-11-1999",
      marks: 72,
      country: "India",
    },
    {
      firstName: "beemla",
      lastName: "nayak",
      gender: "male",
      dob: "05-14-1999",
      marks: 62,
      country: "India",
    },
    {
      firstName: "sneha",
      lastName: "latha",
      gender: "female",
      dob: "11-10-2000",
      marks: 62,
      country: "India",
    },
    {
      firstName: "indra",
      lastName: "sena",
      gender: "male",
      dob: "05-10-1999",
      marks: 88,
      country: "Australia",
    },
    {
      firstName: "samara",
      lastName: "simha",
      gender: "male",
      dob: "05-10-2000",
      marks: 88,
      country: "Australia",
    },
  ];

	const peopleColumns = [
		{
			title: 'FirstName',
			dataIndex: 'firstName',
			sorter: (a,b) => a.firstName.localeCompare(b.firstName)
		},
		{
			title: 'LastName',
			dataIndex: 'lastName',
			sorter: (a,b) => a.lastName.localeCompare(b.lastName)

		},
		{
			title: 'Gender',
			dataIndex: 'gender',
			filters: [{
				text: 'Male',
				value: 'male',
			},
			{
				text: 'Female',
				value: 'female'
			},
			],
			onFilter: (value , record) =>  record.gender == value
		},
		{
			title: 'Date of Birth',
			dataIndex: 'dob',
			sorter: (a,b)=>moment(a.dob) - moment(b.dob)

		},
		{
			title: 'Marks',
			dataIndex: 'marks',
			sorter: (a,b) => a.marks - b.marks

		},
		{
			title: 'Country',
			dataIndex: 'country',
			sorter: (a,b) => a.country.localeCompare(b.country)

		}

	];
	const [tableData, setTableData] = useState(peopleData)
	
	function searchTable(searchKey){
		var tempData = peopleData;

    	var filteredData = tempData.filter((data) =>
    	  JSON.stringify(data).toLowerCase().includes(searchKey.toLowerCase())
    	);
	       setTableData(filteredData);

		}

	return(
		<Dashboard>

			<div className="tables">
				<h3>Tables</h3>
				<Input placeholder="Search here" style={{width:'40'}} onChange= {(e) => {
					searchTable(e.target.value)
				}}/>

				<Table columns={peopleColumns} dataSource={tableData}/>
				
			</div>

			
		</Dashboard>
	)
}

export default Tables;