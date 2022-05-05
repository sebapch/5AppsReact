import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Axios from 'axios';

const EditData = () => {
  const { id } = useParams();
  const [edited, setEdited] = useState({});
  const [users, setUsers] = useState([]);


  function traerUser(id){
    Axios.get(`/edit/user`)	
            .then(res => {
              console.log(res)
              
              setUsers(res)
            })
            .catch(err => {
              console.log(err)
            })
  }
  useEffect(() => {
    traerUser();
    console.log(users);
  }, []);


  

  return (
    <>
      <div>hola</div>
    </>
  )
}

export default EditData