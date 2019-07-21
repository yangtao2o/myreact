import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";

class MyCard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  reader() {
    return (
      <div>
        <Card
          title="Default size card"
          extra={<Link to="#">More</Link>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    );
  }
}

export default MyCard;
