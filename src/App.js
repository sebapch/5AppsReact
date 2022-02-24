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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Welcome />}/>
        <Route path='/home' exact element={<Home />}/>
        <Route path='/login' exact element={<Login />}/>
        <Route path='/forms' exact element={<Forms />}/>
        <Route path='/todolist' exact element={<TodoList />}/>
        <Route path='/api' exact element={<API />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
