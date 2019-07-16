
import React, {Component} from 'react';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
    console.log('super', this)
  }

  handleClick(e) {
    this.setState({
      liked: !this.state.liked
    })
  }

  render() {
    const text = this.state.liked ? 'like' : 'haven\'t liked';
    console.log('render: ', this)
    return (
      <div>
        <h2 onClick={this.handleClick.bind(this)}>
          You {text} this. Click to toggle.
        </h2>
      </div>
    )
  }
}

export default LikeButton; 