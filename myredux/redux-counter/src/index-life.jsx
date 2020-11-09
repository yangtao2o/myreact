import React from "react";
import CounterState from "./counter-state-life";
import CounterRedux from "./counter-redux";
import CounterHooks from "./counter-hooks";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "tao"
    };
    console.log("Parent constructor", props);
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Parent getDerivedStateFromProps", props, state);
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "Parent shouldComponentUpdate(nextProps, nextState)",
      nextProps,
      nextState
    );
    // if (this.props.name !== nextProps.name) {
    //   return true
    // }

    return true;
  }
  componentDidMount() {
    console.log("Parent componentDidMount ");
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Parent getSnapshotBeforeUpdate", prevProps, prevState);
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Parent componentDidUpdate", prevProps, prevState, snapshot);
  }
  componentWillUnmount() {
    console.log("Parent unmount ", arguments);
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h2>State</h2>
        <CounterState />
        <h2>Redux</h2>
        <CounterRedux />
        <h2>Hook</h2>
        <CounterHooks />
      </div>
    );
  }
}
