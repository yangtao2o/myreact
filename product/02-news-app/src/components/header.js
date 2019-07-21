import React from "react";
import {Link} from "react-router-dom";
import { Row, Col, Menu, Icon, Button, Form, Input, Check
 } from "antd";
import news from "../assets/img/news-logo.svg";

const { SubMenu } = Menu;
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 'top',
      modalVisible: false,
      action: 'login',
      hasLogined: false,
      userNickName: '',
      userid: 0,
    };
  }
  render() {
    let {getFieldProps} = this.props.form;
    const userShow = false ? 
    <Menu.Item key="logout" className="register">
      <Button type="primary" htmlType="button">{this.state.userNickName}</Button>&nbsp;&nbsp;
      <Link target="_blank">
        <Button type="dashed" htmlType="button">个人中心</Button>
      </Link>&nbsp;&nbsp;
      <Button type="ghost" htmlType="button">退出</Button>
    </Menu.Item>
    : 
    <Menu.Item key="register" className="register">
      <Icon type="appstore" />登录/注册
    </Menu.Item>;
    return (
      <header>
        <Row>
          <Col span={2} />
          <Col span={4}>
            <a href="/" className="logo">
              <img src={news} alt="App logo" />
              <span>TodayNews</span>
            </a>
          </Col>
          <Col span={12}>
            <Menu mode="horizontal">
              <Menu.Item key="toutiao">
                <Icon type="appstore" />
                头条
              </Menu.Item>
              <Menu.Item key="guoji">
                <Icon type="appstore" />
                国际
              </Menu.Item>
              <Menu.Item key="yule">
                <Icon type="appstore" />
                娱乐
              </Menu.Item>
              <Menu.Item key="yinyue">
                <Icon type="appstore" />
                音乐
              </Menu.Item>
              <Menu.Item key="jingji">
                <Icon type="appstore" />
                经济
              </Menu.Item>
              <Menu.Item key="tiyu">
                <Icon type="appstore" />
                体育
              </Menu.Item>
              <Menu.Item key="shishang">
                <Icon type="appstore" />
                时尚
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={4}>
            <Menu mode="horizontal">
              {userShow}
            </Menu>
          </Col>
          <Col span={2} />
        </Row>
      </header>
    );
  }
}
export default Header = Form.create({})(Header);