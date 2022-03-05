import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';

import Tables from './Components/Tables';
import Forms from './Components/Forms'
import TodoList from './Components/TodoList'
import Welcome from './Components/Welcome'
import API from './API';
import "antd/dist/antd.css";
import Step1 from './Components/steps/step1';
import EarlyAccess from './Components/EarlyAccess';
import Admin from './Components/Admin';
import axios from 'axios';
import UserContext from './context/userContext';

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post('http://localhost:5000/users/tokenIsValid', null, { headers: { "x-auth-token": token } });
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    }

    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>

          <Switch>


            <Route exact path="/" component={Welcome} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/step1" component={Step1} />
            <Route path="/early" component={EarlyAccess} />
            <Route path="/todolist" component={TodoList} />
            <Route path="/admin" component={Admin} />
            <Route path="/api" component={API} />
       

          </Switch>
        </UserContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;
