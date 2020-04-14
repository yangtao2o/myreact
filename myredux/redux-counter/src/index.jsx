import React from "react";
import CounterState from "./counter-state";
import CounterRedux from "./counter-redux";
import CounterHooks from "./counter-hooks";

export default class App extends React.Component {
  render() {
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
