import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route, Routes, Link} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Tables from './Components/Tables';
import Forms from './Components/Forms'
import TodoList from './Components/TodoList'
import Welcome from './Components/Welcome'
import API from './API';
import "antd/dist/antd.css";
import Step1 from './Components/steps/step1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' exact element={<Welcome />}/>
          <Route path='/home' exact element={<Home />}/>
          <Route path='/login' exact element={<Login />}/>
          <Route path='/step1' exact element={<Step1 />}/>
          <Route path='/todolist' exact element={<TodoList />}/>
          <Route path='/api' exact element={<API />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
