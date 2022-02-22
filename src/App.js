import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Tables from './Components/Tables';
import Forms from './Components/Forms'
import TodoList from './Components/TodoList'
import API from './API';
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path='/' exact component={Home}/>
      <Route path='/login' exact component={Login}/>
      <Route path='/forms' exact component={Forms}/>
      <Route path='/todolist' exact component={TodoList}/>
      <Route path='/api' exact component={API}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
