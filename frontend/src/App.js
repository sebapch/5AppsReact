import React, {useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import axios from 'axios';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Footer';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import UserContext from './context/userContext';
import './App.css';
import Early from './components/pages/Early';
import Step1 from './components/pages/steps/step1';
import apy from './components/utils/apy/apy';
import Vaults from './components/pages/Vaults/Vaults'
import Profile from './components/pages/Profile/Profile';
import Settings from './components/pages/Settings/Settings';
import switchTo from './components/utils/switch/switchTo';
import BackNext from './components/layout/buttons/BackNext';
import ApyCripto from './components/utils/ApyCripto/ApyCripto';
import TimeLock from './components/utils/timelock/Timelock'
import Binance from './components/pages/Profile/Binance';
import WalletPage from './components/pages/Profile/Wallet'
import DrawerLayout from './components/layout/Drawer/DrawerLayout';
import Step2 from './components/pages/steps/step2';
import Step3 from './components/pages/steps/step3';
import {VaultProvider} from './context/vaultContext';
import Historial from './components/pages/Historial/Historial';
import Admin from './components/pages/Private/Admin';
import StepsCount from './components/utils/stepsCount/stepsCount';

function App() {
  const [ userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if(token === null){
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post('http://localhost:5000/users/tokenIsValid', null, {headers: {"x-auth-token": token}});
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
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
         {/* <Header />  */}
         <DrawerLayout>
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/perfil" component={Profile} />
          <Route path="/bpay" component={Binance} />
          <Route path="/vaults" component={Vaults} />
          <Route path="/opciones" component={Settings} />
          <Route path="/historial" component={Historial} />
          <Route path="/transfer" component={WalletPage} />
          <Route path="/admin" component={Admin} />
          <Route path="/test" component={StepsCount} />


          <ProtectedRoute path="/early" component={Early} />
          <VaultProvider>
            <Route path="/step1" component={Step1} />
            <Route path="/step2" component={Step2} />
            <Route path="/step3" component={Step3} />
          </VaultProvider>

        </Switch>
        </DrawerLayout>
        </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
