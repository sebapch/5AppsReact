import React, { Component, useState } from 'react'
import Dashboard from '../Dashboard'
import './Login.css'

const Login = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    function handleInputChange(value) {
        console.log(value)
        return setForm((prev) => {
            console.log(form);
            return { ...prev, ...value };
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const user = {
            ...form
        }
        console.log(user);
    };

    return (
        <Dashboard>


            <div class="section">
                <div class="container">
                    <div class="row full-height justify-content-center">
                        <div class="col-12 text-center align-self-center ">
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
                                                    <div class="form-group">
                                                        <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off" />
                                                        <i class="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                                                        <i class="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <a href="#" class="btn mt-4">submit</a>
                                                    <p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-back">
                                            <div class="center-wrap">
                                                <div class="section text-center">
                                                    <h4 class="mb-4 pb-3">Sign Up</h4>
                                                    <div class="form-group">
                                                        <input type="text" name="name" class="form-style" onChange={(e) => handleInputChange({ name: e.target.value, position: e.target.value, level: e.target.value })}
                                                            value={form.name} placeholder="Your Full Name" id="name" autocomplete="off" />
                                                        <i class="input-icon uil uil-user"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="email" name="email"
                                                            onChange={handleInputChange}
                                                            value={form.email} class="form-style" placeholder="Your Email" id="email" autocomplete="off" />
                                                        <i class="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="password" name="password"
                                                            onChange={handleInputChange}
                                                            value={form.password} class="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                                                        <i class="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="password" name="password_confirm"
                                                            onChange={handleInputChange}
                                                            value={form.password_confirm} class="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                                                        <i class="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <a href="#" class="btn mt-4">submit</a>
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