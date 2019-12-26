import React from "react";

class FirstSon extends React.Component {
  render() {
    return <h2 onClick={this.props.onClick}>戳我，我要让旁边那位变成红色</h2>;
  }
}

class SecondSon extends React.Component {
  render() {
    return <h2 style={{ color: this.props.color }}>我是你旁边那位</h2>;
  }
}

class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#666"
    };
  }
  handleClick() {
    this.setState({
      color: "red"
    });
  }
  render() {
    return (
      <div>
        <FirstSon onClick={() => this.handleClick()} />
        <SecondSon color={this.state.color} />
      </div>
    );
  }
}

export default Father;
