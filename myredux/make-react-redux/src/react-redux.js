import React, { Component } from 'react'

const ThemeContext = React.createContext()

class Provider extends Component {
  render() {
    return (
      <ThemeContext.Provider value={this.props.store}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

const connect = (mapStateToProps, mapDispatchToProps) => WrappedComponent => {
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
      const stateProps = mapStateToProps
        ? mapStateToProps(value.getState(), this.props)
        : {}
      const dispatchProps = mapDispatchToProps
        ? mapDispatchToProps(value.dispatch, this.props)
        : {}

      this.setState({
        allProps: { ...stateProps, ...dispatchProps, ...this.props },
      })
    }

    render() {
      return <WrappedComponent {...this.state.allProps} />
    }
  }
  return Connect
}

export { Provider, connect }
