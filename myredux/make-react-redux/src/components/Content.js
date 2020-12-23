import React, { Component } from 'react'
import ThemeSwitch from './ThemeSwitch'
import { connect } from './../react-redux'

class Content extends Component {
  render() {
    const { color } = this.props
    return (
      <>
        <p style={{ color }}>React.js 小书内容</p>
        <ThemeSwitch />
      </>
    )
  }
}

const mapStateToProps = state => ({
  color: state.themeColor,
})

export default connect(mapStateToProps)(Content)
