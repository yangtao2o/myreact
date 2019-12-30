import React from "react";
import CounterState from "./counter-state";
import CounterRedux from "./counter-redux";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CounterState />
        <CounterRedux />
      </div>
    );
  }
}
