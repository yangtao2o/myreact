import React from 'react';
import { Row, Col} from 'antd';

export default class MyFooter extends React.Component {
  render() {
    return (
      <footer>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="footer">
            &copy;&nbsp;2019 ReactNews. All Rights Reserved.
          </Col>
          <Col span={2}></Col>
        </Row>
      </footer>
    );
  };
}