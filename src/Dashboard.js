import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  TableOutlined,
  SettingFilled,
} from '@ant-design/icons';
import LogoOficial from './assets/LogoOficial.svg';
import LogoSinTexto from './assets/LogoSinTexto.svg';
import AjustesBlanco from './assets/ajustesBlanco.png';
import HomeBlanco from './assets/homeBlanco.png';
import UsuarioBlanco from './assets/usuarioBlanco.png';
import VaultsBlanco from './assets/vaultsBlanco.png'
import LogoSinTextoBlanco from './assets/LogoSinTextoBlanco.svg'

import './Dashboard.css';
import Violeta from './assets/violeta.png';

const { Header, Sider, Content, Footer } = Layout;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout >
        <Header>
          <h1>HEADER</h1>
        </Header>
       
        
  
          <Content>

            {this.props.children}
          </Content>

          <Footer>
          <Menu  mode="horizontal" defaultSelectedKeys={[window.location.pathname]} className='themenu'>
          {/* <div className="logo">
            <h3>{this.state.collapsed ? <img src={LogoSinTexto} alt=''  onClick={this.toggle}/>  : <img src={LogoOficial} alt='' onClick={this.toggle} />}</h3>
          </div> */}
          <Menu.Item key="/login" icon={<img src={LogoSinTexto} style={{color: 'white'}} alt='' width="25px"/>}>
              <Link to='/login'>Login</Link>
            </Menu.Item>
            <Menu.Item key="/" icon={<img src={HomeBlanco} alt='' width="25px"/>}>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="/myVaults" icon={<img src={VaultsBlanco} alt='' width="25px"/>} >
              <Link to='/myVaults'>My Vaults</Link>
            </Menu.Item>
            <Menu.Item key="/forms" icon={<img src={LogoSinTextoBlanco} alt='' width="50px"/>}>
              <Link to='/forms'>Guuru</Link>
            </Menu.Item>
            <Menu.Item key="/todolist" icon={<img src={UsuarioBlanco} alt='' width="25px"/>}>
              <Link to='/todolist'>Profile</Link>
            </Menu.Item>
            <Menu.Item key="/api" icon={<img src={AjustesBlanco} alt='' width="25px"/>}>
              <Link to='/api'>Settings</Link>
            </Menu.Item>
          </Menu>
          </Footer>
        
      </Layout>
    );
  }
}

export default Dashboard;