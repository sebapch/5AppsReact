import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';


const EditData = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [saldo, setSaldo] = useState();

  function traerUser (user){
    Axios.get(`/users/api/edit/${id}`)
            .then(res => {
              setUser(user => res.data)
            })
            .catch(err => {
              console.log(err)
            })
  }
  useEffect(() => {
    traerUser();
  }, []);

  const saveUser = () => {
    Axios.post(`/users/api/edit/${id}`, {
      saldo: saldo,
      userId : user._id
    })
      .then(res => {
        console.log(res)
        console.log(saldo)
      }
      ).catch(err => {
        console.log(err)
      })
  }

  const activateVault = () => {
    Axios.post(`/users/api/activate/${id}`, {
      activated: true,
      vaultId: user.vaults._id
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  console.log(user);

  return (
    <>
      <h1>Editar usuario</h1>
      <form>
      <label>Nombre del usuario: </label>
      <input type="text" defaultValue={user.displayName}/>
      <br/>
      <label>Email: </label>
      <input type="text" defaultValue={user?.email}/>
      <br/>
      <label>Saldo disponible: </label>
      <input type="text" defaultValue={user.saldo} onChange={e => setSaldo(e.target.value)}/>
      <br/>
      <label>ID del usuario: </label>
      <input type="text" defaultValue={user._id}/>
      <br/>
      <button onClick={saveUser}>Editar datos</button>
        <TableContainer >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell >ID</TableCell>
              <TableCell>Vault</TableCell>
              <TableCell align="right">Timelock</TableCell>
              <TableCell align="right">Invertido</TableCell>
              <TableCell align="right">Auto Renovar</TableCell>
              <TableCell align="right">Estado</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user?.vaults && user.vaults.map((vault) => (
              <TableRow
                key={vault._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{vault._id}</TableCell>
                <TableCell component="th" scope="row">
                  {vault.vault}
                </TableCell>
                <TableCell align="right">{vault.timelock}</TableCell>
                <TableCell align="right">{vault.funds}</TableCell>
                <TableCell align="right">{(vault.autoRenew) ? 'activado' : 'no activado'}</TableCell>
                <TableCell align="right">{(vault.activated) ? 'activa' : ' no activa'}</TableCell>
                {(!vault.activated) ? <TableCell align="right"><Button variant="contained" onClick={activateVault}>Aceptar y activar</Button></TableCell> : null}
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    
      </form>

    </>
  )
}

export default EditData