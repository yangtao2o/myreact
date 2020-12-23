import React, { Component } from 'react'
import { ThemeContext } from './../theme-context'
import ThemeSwitch from './ThemeSwitch'

class Content extends Component {
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

  render() {
    const { color } = this.state
    return (
      <>
        <p style={{ color }}>React.js 小书内容</p>
        <ThemeSwitch />
      </>
    )
  }
}

export default Content
