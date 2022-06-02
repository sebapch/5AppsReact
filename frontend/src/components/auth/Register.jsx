import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../misc/ErrorNotice";
import './Login.css'

function Register () {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [displayName, setDisplayName] = useState();
    const [error, setError] = useState();
    const saldo = 0;

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try{
            const newUser = {email, password, passwordCheck, displayName, saldo};
            await axios.post("/users/register", newUser);
            const loginResponse = await axios.post("/users/login", {
                email, password
            });
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            localStorage.setItem("auth-token", loginResponse.data.token);
            history.push("/");
        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
        
    };
   
    return ( 
<div className="divBody">
      <div className="form-main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          {error && (
            <ErrorNotice
              message={error}
              clearError={() => setError(undefined)}
            />
          )}
          <form onSubmit={submit}>
            <label for="chk" aria-hidden="true" className="top-text2">
              REGISTER
            </label>
            
                <input type="text" id="dsplay-name" className="form-input" placeholder="Nombre" onChange={e => setDisplayName(e.target.value)}/>
                
                <input type="email" id="email" className="form-input" placeholder="email" onChange={e => setEmail(e.target.value)}/>
                
                <input type="password" id="password" className="form-input" placeholder="password" onChange={e => setPassword(e.target.value)}/>
                
                <input type="password" className="form-input" placeholder="repetir password" onChange={e => setPasswordCheck(e.target.value)}/>

            <input type="submit" value="Register" className="form-button" />
          </form>
        </div>
      </div>
    </div>

        /* <div className="register">
            <h2>Register</h2>
            {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
            <div className='box-form'>
            <form onSubmit={submit} className='form-login'>
                <label>Nombre: </label>
                <input type="text" id="dsplay-name" onChange={e => setDisplayName(e.target.value)}/>
                <label>Email: </label>
                <input type="email" id="email" onChange={e => setEmail(e.target.value)}/>
                <label>Password: </label>
                <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
                <label>Repetir Password: </label>
                <input type="password" onChange={e => setPasswordCheck(e.target.value)}/>
                
                <input type="submit" value="Register" className="btn btn-primary" />
            </form>
            </div>
        </div> */
        );
}
 
export default Register;