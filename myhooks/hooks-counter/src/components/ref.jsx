import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Hi" };
    this.input = React.createRef();
  }

  handleSubmit(e) {
     this.setState({
      value: this.input.current.value
    });
    e.preventDefault();
  }

  render() {
    return (
      <>
        <input ref={this.input} onChange={e => this.handleSubmit(e)} />
        <p>{this.state.value}</p>
      </>
    );
  }
}
