import React from "react";

class Son extends React.Component {
  render() {
    return <p onClick={this.props.onClick}>{this.props.text}</p>;
  }
}

class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fatherToSonText: "父组件传给子组件的内容",
      sonToFatherText: "子组件传给父组件的内容"
    };
  }
  handleClick(text) {
    alert(text);
  }
  render() {
    return (
      <Son
        text={this.state.fatherToSonText}
        onClick={e => this.handleClick(this.state.sonToFatherText, e)}
      />
    );
  }
}

export default Father;
