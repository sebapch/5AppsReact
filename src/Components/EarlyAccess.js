import React, { useState } from "react";

import './EarlyAccess.css'
import { Row, Col } from 'antd'
import LogoFondoClaro from '../assets/LogoFondoClaro.svg';
import Instagram from '../assets/icons/Instagram.svg';
import Telegram from '../assets/icons/Telegram.svg';
import Twitter from '../assets/icons/Twitter.svg';
import Whatsapp from '../assets/icons/Whatsapp.svg';




const EarlyAccess = () => {
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
  });


  // These methods will update the state properties.
  function updateForm(value) {
    console.log(value)
    return setForm((prev) => {
      console.log(form);
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    console.log(newPerson)
    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })

      .catch(error => {
        window.alert(error);
        return;
      });


    setForm({ name: "", position: "", level: "" });
    console.log(form)
/*     navigate("/admin"); */
  }
  return (
    <>
      {/* <Row justify='center'>
      <Col>

      <form onSubmit={onSubmit}>
        <h1 className='early-title'>Acceso anticipado</h1>
        <h3 className='early-subtitle'>El futuro es ahora. No te quedes atras</h3>
        <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value, position: e.target.value, level: e.target.value })}
         />
        <br />
        <button className='btn-early' type="submit">Reserva tu lugar</button>
        </form>
      </Col>
    </Row> */}


      <div className="bgimg">
        <div className="topleft">
          <img src={LogoFondoClaro} style={{ color: 'white', width: "200px" }} alt='' />
        </div>
        <div className="middle">
          <h1>ACCESO ANTICIPADO</h1>
          <hr />
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="email"
              className="form-control"
              id="name"
              value={form.name}
              onChange={(e) => updateForm({ name: e.target.value, position: e.target.value, level: e.target.value })}
            />
            <br />
            <button className='btn-early' type="submit">Reserva tu lugar</button>
          </form>
        </div>
        <div className="bottomleft">
        <img src={Instagram} style={{ color: 'white', width: "100px" }} alt='' />
        <img src={Twitter} style={{ color: 'white', width: "100px" }} alt='' />
        <img src={Telegram} style={{ color: 'white', width: "100px" }} alt='' />
        <img src={Whatsapp} style={{ color: 'white', width: "100px" }} alt='' />
        </div>
      </div>
    </>
  )
}

export default EarlyAccess