import React, { Component } from 'react'
import { connect } from './../react-redux'

class Header extends Component {
  render() {
    const { color } = this.props
    return <h1 style={{ color }}>React.js 小书</h1>
  }
}

const mapStateToProps = state => ({
  color: state.themeColor,
})

export default connect(mapStateToProps)(Header)
