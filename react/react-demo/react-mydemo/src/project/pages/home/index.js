import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    UserAddOutlined
  } from '@ant-design/icons';
import './index.scss';
const { Header, Sider, Content,Footer } = Layout;

class Home extends Component {
    constructor(){
        super();
        this.state = {
            collapsed: false,
          };
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
          
          <Layout>
            <div>{this.state.collapsed?<UserAddOutlined />:<HomeOutlined />}</div>
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <HomeOutlined />
                  <span>nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <SettingFilled />
                  <span>nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <SmileOutlined />
                  <span>nav 3</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                {/* <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                /> */}
              </Header>
              <Content style={{
                margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
              }}
              >
                Content
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
            </Layout>
          </Layout>
        );
      }
}

export default Home;
