import React from "react";
import { createStore } from "redux";

const reducer = (state = { counter: 0 }, action = {}) => {
  const { type } = action;
  switch (type) {
    case "INCREASE":
      return { ...state, counter: state.counter + 1 };
    case "DECREASE":
      return { ...state, counter: state.counter - 1 };
    default:
      return { ...state, counter: 0 };
  }
};

const actions = {
  increase: () => ({ type: "INCREASE" }),
  decrease: () => ({ type: "DECREASE" }),
  reset: () => ({ type: "RESET" })
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
  onIncrease() {
    store.dispatch(actions.increase());
  }
  onDecrease() {
    store.dispatch(actions.decrease());
  }
  onReset() {
    store.dispatch(actions.reset());
  }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.onIncrease()}>+1</button>
        <button onClick={() => this.onDecrease()}>-1</button>
        <button onClick={() => this.onReset()}>0</button>
      </div>
    );
  }
}
