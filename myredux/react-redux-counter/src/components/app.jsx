import React from "react";

class App extends React.Component {
  render() {
    let {
      counter,
      onIncreaseHandle,
      onDecreaseHandle,
      onResetHandle
    } = this.props;
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={onIncreaseHandle}>+1</button>
        <button onClick={onDecreaseHandle}>-1</button>
        <button onClick={onResetHandle}>0</button>
      </div>
    );
  }
}

export default App;
