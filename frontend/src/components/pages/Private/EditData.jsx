import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Axios from 'axios';

const EditData = () => {
  const { id } = useParams();
  const [edited, setEdited] = useState({});

  console.log(edited);

  return (
    <>
      <div>hola</div>
    </>
  )
}

export default EditData