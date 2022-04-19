import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Axios from "axios";
import zIndex from '@mui/material/styles/zIndex';
import { Button } from '@mui/material';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];





export default function BasicTable() {
  const [users, setUsers] = useState([]);

  function traerVaults(){
    Axios.get("/users/api/vaults")
            .then(res => {
              console.log(res)
              
              setUsers(res)
            })
            .catch(err => {
              console.log(err)
            })
  }


  useEffect(() => {
    traerVaults();
    
  }, []);

  console.log(users.data);

  

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">UserName</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Saldo</TableCell>
            <TableCell align="right">Vaults</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.data?.map((user, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user?._id}
              </TableCell>
               <TableCell align="right">{user?.displayName}</TableCell>
              <TableCell align="right">{user?.email}</TableCell>
              <TableCell align="right">{user?.saldo}</TableCell>
             <TableCell align="right">{JSON.stringify(user?.vaults)}</TableCell>
             <TableCell align="right">
               <Button color="secondary">Editar</Button>
               <Button color="error">Eliminar</Button>
             </TableCell>

              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}