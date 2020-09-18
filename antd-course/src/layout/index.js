import { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import Link from 'umi/link'

// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout

// 引入子菜单组件
const SubMenu = Menu.SubMenu

const style = {
  topic: {
    height: '32px',
    lineHeight: '32px',
    textAlign: 'center',
    background: 'rgba(255,255,255,.2)',
    margin: '16px',
  },
  header: { background: '#fff', textAlign: 'center', padding: 0, fontSize: '24px' },
  content: { margin: '24px 16px 0' },
  children: { padding: 24, background: '#fff', minHeight: 360 },
  footer: { textAlign: 'center' },
}

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
          <div style={style.topic}>HELLO WORLD</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Helloworld</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="dashboard" />
                  <span>Dashboard</span>
                </span>
              }
            >
              <Menu.Item key="2">
                <Link to="/dashboard/analysis">分析页</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/dashboard/monitor">监控页</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/dashboard/workplace">工作台</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="form" />
                  <span>右键菜单组件</span>
                </span>
              }
            >
              <Menu.Item key="5">
                <Link to="/context-menu/1">React Contexify</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/context-menu/2">React Contextmenu</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/context-menu/3">Contextmenu Nested</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={style.header}>Header</Header>
          <Content style={style.content}>
            <div style={style.children}>{this.props.children}</div>
          </Content>
          <Footer style={style.footer}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout
