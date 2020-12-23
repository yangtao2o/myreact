import React, { Component } from 'react'
import { ThemeContext } from './../theme-context'

class ThemeSwitch extends Component {
  static contextType = ThemeContext

  constructor(props) {
    super(props)
    this.state = {
      color: '',
    }
  }

  componentDidMount() {
    const value = this.context
    this.updateThemeColor()
    value.subscribe(() => this.updateThemeColor())
  }

  updateThemeColor() {
    const value = this.context
    const { themeColor } = value.getState()
    this.setState({
      color: themeColor,
    })
  }

  handleClick(e) {
    const color = e.target.value
    const value = this.context

    value.dispatch({
      type: 'CHANGE_COLOR',
      themeColor: color,
    })
  }

  render() {
    const { color } = this.state
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

export default ThemeSwitch
