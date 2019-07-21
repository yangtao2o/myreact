import React from "react";
import { Layout, Menu, Breadcrumb, Icon, BackTop, Divider } from "antd";
import MyDatePicker from "./date";
import MyTransfer from "./transfer";
import MyDrawer from "./drawer";
import MyLocal from "./locale-provider";
import MyNotification from "./notification";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class MyContent extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>日期选择框</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>穿梭框</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ color: "#fff", fontSize: "20px" }}>
            学习使用Ant Design
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <MyDrawer />
              <Divider />
              <MyNotification />
              <Divider />
              <MyDatePicker />
              <Divider />
              <MyTransfer />
              <Divider />
              <MyLocal />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED and Tao learning.
          </Footer>
          <BackTop>
            <div className="ant-back-top-inner">UP</div>
          </BackTop>
        </Layout>
      </Layout>
    );
  }
}

export default MyContent;
