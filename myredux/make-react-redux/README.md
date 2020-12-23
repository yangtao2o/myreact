# 动手实现 React-redux 练习

主要内容：

- 实现 createStore
- 利用 Context 构建 Provider 组件
- 高阶组件 connect 函数的实现
- connect 两个参数 mapStateToProps 和 mapDispatchToProps

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## 构建实现过程

### 问题

- 为什么 React-redux 这么奇怪？
- 为什么要 connect？
- 为什么要 mapStateToProps 和 mapDispatchToProps？
- 什么是 Provider？

### createStore 实现

React.js 除了状态提升以外并没有更好的办法帮我们解决组件之间共享状态的问题，而使用 context 全局变量让程序不可预测。

我们知道 store 里面的内容是不可以随意修改的，而是通过 dispatch 才能变更里面的 state。

```js
function createStore(reducer) {
  let state = null
  const listeners = []
  const subscribe = listener => listeners.push(listener)
  const getState = () => state
  const dispatch = action => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }
  dispatch({}) // 初始化 state
  return { getState, dispatch, subscribe }
}

const themeReducer = (state, action) => {
  if (!state)
    return {
      themeColor: 'red',
    }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

export default createStore(themeReducer)
```

### 高阶组件 connect 函数

所以我们尝试把 store 和 context 结合起来使用，可以兼顾组件之间共享状态问题和共享状态可能被任意修改的问题。

但是 store 和 context 结合有大量的重复逻辑和对 context 的依赖性过强。

我们尝试通过构建一个高阶组件 connect 函数的方式，把所有的重复逻辑和对 context 的依赖放在里面 connect 函数里面，而其他组件保持 Pure（Dumb） 的状态，让 connect 跟 context 打交道，然后通过 props 把参数传给普通的组件。

而每个组件需要的数据和需要触发的 action 都不一样，所以调整 connect，让它可以接受两个参数 mapStateToProps 和 mapDispatchToProps，分别用于告诉 connect 这个组件需要什么数据和需要触发什么 action。

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

### Provider 实现

为了把所有关于 context 的代码完全从我们业务逻辑里面清除掉，我们构建了一个 Provider 组件。

Provider 作为所有组件树的根节点，外界可以通过 props 给它提供 store，它会把 store 放到自己的 context 里面，好让子组件 connect 的时候都能够获取到。

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

### 应用实例

全局配置 store：

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

使用 connect：

```js
import React, { Component } from 'react'
import { connect } from './../react-redux'

class ThemeSwitch extends Component {
  handleClick(e) {
    this.props.onSwitchColor(e.target.value)
  }

  render() {
    const { color } = this.props
    return (
      <button style={{ color }} onClick={e => this.handleClick(e)} value="red">
        Red
      </button>
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
```

### 总结

react-redux.js 这个文件里面的两个内容：connect 函数和 Provider 容器组件。这就是 React-redux 的基本内容，当然它是一个残疾版本的 React-redux，很多地方需要完善。例如性能问题，现在不相关的数据变化的时候其实所有组件都会重新渲染的。

## 参考资料

- [动手实现 React-redux（一）：初始化工程](http://huziketang.mangojuice.top/books/react/lesson36)
