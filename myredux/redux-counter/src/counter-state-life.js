import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    console.log('Child constructor ', props)
    super(props);
    this.state = {
      value: 0
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Child getDerivedStateFromProps", props, state);
    return null
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "Child shouldComponentUpdate(nextProps, nextState)",
      nextProps,
      nextState
    );
    // if (this.props.value !== nextProps.value) {
    //   return true
    // }
    
    return true
  }
  componentDidMount() {
    console.log("Child componentDidMount ");
    
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Child getSnapshotBeforeUpdate", prevProps, prevState);
    return null
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Child componentDidUpdate", prevProps, prevState, snapshot);
  }
  componentWillUnmount() {
    console.log("Child unmount ", arguments);
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
    console.log('Child render')
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
