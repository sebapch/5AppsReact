import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Axios from 'axios';

const EditData = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [saldo, setSaldo] = useState();

  function traerUser(){
    Axios.get(`/users/api/edit/${id}`)
            .then(res => {
              setUser(res.data)
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

console.log(saldo);

  return (
    <>
      <h1>Editar usuario</h1>
      <form>
      <input type="text" defaultValue={user.displayName}/>
      <input type="text" defaultValue={user.email}/>
      <input type="text" defaultValue={user.saldo} onChange={e => setSaldo(e.target.value)}/>
      <input type="text" defaultValue={user._id}/>
      <button onClick={saveUser}>Editar</button>
      </form>

    </>
  )
}

export default EditData