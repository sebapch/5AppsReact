import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Row, Col, Space } from 'antd';
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
import LogoSinTextoBlanco from './assets/LogoSinTextoBlanco.svg';
import solBlanco from './assets/solBlanco.svg';
import lunaVioleta from './assets/lunaVioleta.svg'
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
        <Header className="header">
          <Row>
            <Col span={12}>
              <Space direction='vertical'>
                <h1 className="titleHeader">Guuru</h1>
                <Space className='toggle-day'>
                  <img src={solBlanco} style={{ color: 'white', width: "30px" }} alt='' />
                  <p className='divider-slash'>/</p>
                  <img src={lunaVioleta} style={{ color: 'white', width: "30px" }} alt='' />
                </Space>
              </Space>
            </Col>
            <Col span={12} className='logo-header-col'>
              <img src={LogoSinTexto} style={{ color: 'white', width: "100px" }} alt='' className='img-round-logo' />
            </Col>
          </Row>
        </Header>



        <Content>

          {this.props.children}
        </Content>

        <Footer>

          <Row className='themenu' justify='space-around'>
            <Col span={4}>
              <Space direction='vertical'>
                <img src={HomeBlanco} alt='' width="50px" />
                <Link to='/' className='links-footer'>Home</Link>
              </Space>
            </Col>
            <Col span={4}>
              <Space direction='vertical'>
                <img src={VaultsBlanco} alt='' width="50px" />
                <Link to='/myVaults' className='links-footer'>My Vaults</Link>
              </Space>

            </Col>
            <Col span={4}>
              <Space direction='vertical'>

                <img src={LogoSinTexto} alt='' width="100px" />
                <Link to='/forms' className='links-footer'>Guuru</Link>
              </Space>

            </Col>
            <Col span={4}>
              <Space direction='vertical'>

                <img src={UsuarioBlanco} alt='' width="55px" />
                <Link to='/todolist' className='links-footer'>Profile</Link>
              </Space>

            </Col>
            <Col span={4}>
              <Space direction='vertical'>

                <img src={AjustesBlanco} alt='' width="55px" />
                <Link to='/api' className='links-footer'>Settings</Link>
              </Space>

            </Col>
          </Row>

        </Footer>

      </Layout>
    );
  }
}

export default Dashboard;