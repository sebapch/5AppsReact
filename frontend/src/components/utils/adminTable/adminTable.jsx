import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Axios from "axios";
import { Button } from '@mui/material';
import './adminTable.css';






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
 
function deleteUser(id){
  
  Axios.delete(`/users/api/${id}`)
  .then(res => {
    console.log(res)
    window.location.reload();
  })
  .catch(err => { console.log(err) })
}

  

  return (
    <TableContainer component={Paper} className="admin-container">
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
                {console.log((user?.vaults.length ))}
              </TableCell>
              <TableCell align="right">{user?.displayName}</TableCell>
              <TableCell align="right">{user?.email}</TableCell>
              <TableCell align="right">{user?.saldo}</TableCell>
              <TableCell align="right">{(user?.vaults.length)}</TableCell>
             <TableCell align="right">
             <Link to={`/edit/${user._id}`} className="links-footer">
                <Button color="secondary" >
                  Editar
                </Button>
              </Link>
               
               <Button color="error" onClick={() => deleteUser(user._id)}>Eliminar</Button>
             </TableCell>
 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}