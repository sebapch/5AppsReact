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
} from '@ant-design/icons';

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
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            <h3>{this.state.collapsed ? 'SM' : 'Sebastian Medina'}</h3>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
            <Menu.Item key="/" icon={<UserOutlined />}>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="/tables" icon={<TableOutlined />}>
              <Link to='/tables'>Tables</Link>
            </Menu.Item>
            <Menu.Item key="/forms" icon={<UploadOutlined />}>
              <Link to='/forms'>Forms</Link>
            </Menu.Item>
            <Menu.Item key="/todolist" icon={<UploadOutlined />}>
              <Link to='/todolist'>todolist</Link>
            </Menu.Item>
            <Menu.Item key="/api" icon={<UploadOutlined />}>
              <Link to='/api'>Api</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, textAlign: 'left' }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
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