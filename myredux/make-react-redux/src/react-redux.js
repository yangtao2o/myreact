import React, { Component } from 'react'
import { ThemeContext } from './theme-context'

export const connect = mapStateToProps => WrappedComponent => {
  class Connect extends Component {
    static contextType = ThemeContext
    constructor(props) {
      super(props)
      this.state = {
        allProps: {},
      }
    }

    componentDidMount() {
      const value = this.context
      this.updateProps()
      value.subscribe(() => this.updateProps())
    }

    updateProps() {
      const value = this.context
      const stateProps = mapStateToProps(value.getState(), this.props)
      this.setState({
        allProps: { ...stateProps, ...this.props },
      })
    }

    render() {
      return <WrappedComponent {...this.state.allProps} />
    }
  }
  return Connect
}
