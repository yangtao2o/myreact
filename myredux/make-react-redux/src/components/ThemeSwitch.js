import React, { Component } from 'react'
import { connect } from './../react-redux'

class ThemeSwitch extends Component {
  handleClick(e) {
    const color = e.target.value
    this.props.onSwitchColor(color)
  }

  render() {
    const { color } = this.props
    return (
      <div>
        <button
          style={{ color }}
          onClick={e => this.handleClick(e)}
          value="red"
        >
          Red
        </button>
        <button
          style={{ color }}
          onClick={e => this.handleClick(e)}
          value="blue"
        >
          Blue
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  color: state.themeColor,
})

const mapDispatchToProps = dispatch => ({
  onSwitchColor: color => {
    dispatch({ type: 'CHANGE_COLOR', themeColor: color })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)
