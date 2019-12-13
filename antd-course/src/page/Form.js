import { Component } from 'react';

const MyInput = ({ onChange }) => <input onChange={onChange} />;

class Demo extends Component {
  state = {
    text: ""
  };

  onTextChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  onTextReset = () => {
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <MyInput value={this.state.text} onChange={this.onTextChange} />
        <button onClick={this.onTextReset}>Reset</button>
        <div>{this.state.text}</div>
      </div>
    )
  }
}

export default Demo;