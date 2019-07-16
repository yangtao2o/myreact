import React from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import news from '../assets/img/news-logo.svg';

const { SubMenu } = Menu;
function Header() {
  return (
    <header>
      <Row>
        <Col span={2}></Col>
        <Col span={4}>
          <a href="/" className="logo">
            <img src={ news }  alt="App logo" />
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
          <span>登录</span>
          <span>注册</span>
        </Col>
        <Col span={2}></Col>
      </Row>
    </header>
  );
}

export default Header;