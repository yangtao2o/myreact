import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleClick(actions) {
    switch(actions) {
      case 'INCREASE':
        return this.setState((state, props) => ({
          value: ++state.value
        }));
      case 'DECREASE':
        return this.setState((state, props) => ({
          value: --state.value
        }));
      default:
        return this.setState({
          value: 0
        });
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <button onClick={() => this.handleClick('INCREASE')}>+1</button>
        <button onClick={() => this.handleClick('DECREASE')}>-1</button>
        <button onClick={() => this.handleClick('RESET')}>0</button>
      </div>
    );
  }
}
