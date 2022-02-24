import React from 'react'
import { useState } from 'react' 
import Dashboard from '../Dashboard'
import './Login.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {

    const [dataLogin, setDataLogin] = useState({
        email:"",
        password:"",
    });
    const [errorLogin, setErrorLogin] = useState("")

    const handleChangeLogin = ({currentTarget: input}) => {
        setDataLogin({...data, [input.name]: input.value});
    }

    const handleSubmitLogin = async (e) =>{
        e.preventDefault();
        try {
            const url="http://localhost:8080/api/auth";
            const {data: res} = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/"
            console.log(res.message);
        } catch (error) {
            if(error.response && 
                error.response.status >= 400 &&
                error.response.status <= 500
                ){
                    setError(error.response.data.message)
                }
        }
    }

    const [data, setData] = useState({
        name:"",
        email:"",
        password:"",
    });
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const url="http://localhost:8080/api/users";
            const {data: res} = await axios.post(url, data);
            navigate("/login")
            console.log(res.message);
        } catch (error) {
            if(error.response && 
                error.response.status >= 400 &&
                error.response.status <= 500
                ){
                    setError(error.response.data.message)
                }
        }
    }


    return (
        <Dashboard>


            <div class="section">
                <div class="container">
                    <div class="row full-height justify-content-center">
                        <div class="col-12 text-center align-self-center py-5">
                            <div class="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label for="reg-log"></label>
                                <div class="card-3d-wrap mx-auto">
                                    <div class="card-3d-wrapper">
                                        <div class="card-front">
                                            <div class="center-wrap">
                                                <div class="section text-center">
                                                    <h4 class="mb-4 pb-3">Log In</h4>
                                                    <form onSubmit={handleSubmitLogin}>
                                                    <div class="form-group">
                                                        <input type="email" name="email" value={dataLogin.name} onChange={handleChangeLogin} class="form-style" placeholder="Your Email" id="logemail" autocomplete="off" />
                                                        <i class="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="password" name="logpass" value={dataLogin.email} onChange={handleChangeLogin} class="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                                                        <i class="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <button type='submit' class="btn mt-4">submit</button>
                                                    <p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-back">
                                            <div class="center-wrap">
                                                <div class="section text-center">
                                                    <h4 class="mb-4 pb-3">Sign Up</h4>
                                                    <form onSubmit={handleSubmit}>
                                                    <div class="form-group">
                                                        <input type="text" name="name" value={data.name} onChange={handleChange} onChclass="form-style" placeholder="Your Full Name" id="logname" autocomplete="off" />
                                                        <i class="input-icon uil uil-user"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="email" name="email" value={data.email} onChange={handleChange} class="form-style" placeholder="Your Email" id="logemail" autocomplete="off" />
                                                        <i class="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="password" name="password" value={data.password} onChange={handleChange} class="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                                                        <i class="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    {error && <div>{error}</div>}
                                                    <button onClick={handleSubmit} class="btn mt-4" >
                                                        submit
                                                    </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}

export default Login