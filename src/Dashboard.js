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
import './Dashboard.css';
import Violeta from './assets/violeta.png';

const { Header, Sider, Content } = Layout;

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
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
     
          <Menu  mode="inline" defaultSelectedKeys={[window.location.pathname]} className='themenu'>
          <div className="logo">
            <h3>{this.state.collapsed ? <img src={LogoSinTexto} alt=''  onClick={this.toggle}/>  : <img src={LogoOficial} alt='' onClick={this.toggle} />}</h3>
          </div>
          <Menu.Item key="/login" icon={<UserOutlined />}>
              <Link to='/login'>Login</Link>
            </Menu.Item>
            <Menu.Item key="/" icon={<UserOutlined />}>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="/myVaults" icon={<UploadOutlined />} >
              <Link to='/myVaults'>My Vaults</Link>
            </Menu.Item>
            <Menu.Item key="/forms" icon={<UploadOutlined />}>
              <Link to='/forms'>Guuru</Link>
            </Menu.Item>
            <Menu.Item key="/todolist" icon={<UserOutlined />}>
              <Link to='/todolist'>Profile</Link>
            </Menu.Item>
            <Menu.Item key="/api" icon={<SettingFilled  />}>
              <Link to='/api'>Settings</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
  
          <Content
            className="site-layout-background"
            style={{
            
              minHeight: 280,
            }}
          >
            
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;