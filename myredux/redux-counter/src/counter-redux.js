import React from "react";
import { createStore } from "redux";

const reducer = (state = { counter: 0 }, action = {}) => {
  const { type } = action;
  const { counter } = state;
  switch (type) {
    case "INCREASE":
      return { counter: counter + 1 };
    case "DECREASE":
      return { counter: counter - 1 };
    default:
      return { counter: 0 };
  }
};

const store = createStore(reducer);

export default class CounterRedux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.unsubscribe = null;
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={() => store.dispatch({ type: "INCREASE" })}>+1</button>
        <button onClick={() => store.dispatch({ type: "DECREASE" })}>-1</button>
        <button onClick={() => store.dispatch({ type: "RESET" })}>0</button>
      </div>
    );
  }
}
