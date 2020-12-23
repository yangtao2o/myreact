# 动手实现 React-redux 练习

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Provider 实现

```js
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
```

## connect 实现

```js
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
```

## 使用

```js
import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import { Provider } from './react-redux'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

## 参考资料

- [动手实现 React-redux（一）：初始化工程](http://huziketang.mangojuice.top/books/react/lesson36)
