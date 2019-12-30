# 计数器 react-redux

## Start

```shell
npm i

npm start
```

## React-Redux

Redux 是一款状态管理库，并且提供了 react-redux 库来与 React 亲密配合，这两者的关系如下图：

![react-redux流程图](https://user-gold-cdn.xitu.io/2018/10/24/166a3e1533df9e8d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

继续实现计数器，完整 Demo 可以看[这里](https://github.com/yangtao2o/myreact/tree/master/myredux/react-redux-counter)。

src 目录下大体结构：

```shell
├── actions
│   └── counter.jsx
├── components
│   └── app.jsx
├── reducers
│   └── counter.jsx
└── store
    └── app.jsx
├── index.jsx
```

首先，看入口文件 `index.js`:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./reducers/counter.jsx";
import App from "./store/app.jsx";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

Provider 组件，其实就是 Context 实现的，提供一个状态供跨组件使用，只需要把 store 给他传过去，所有的子组件就可以通过 props 属性拿到状态值。

```jsx
let Context = React.createContext();
class Provider extends Component {
  // 将React-redux中的Provide包装了react提供的API生成的Context.Provider
  //<Provider store={xxxx}></Provider>，将store挂载在contex上
  render() {
    return (
      <Context.Provider value={{ store: this.props.store }}>
        {this.props.children} //子组件
      </Context.Provider>
    );
  }
}
```

Reducer 函数，它接受 Action 和当前 State 作为参数，返回一个新的 State，内容和之前的几乎差不多：

```jsx
import reducer from "./reducers/counter.jsx";
```

```jsx
// ./reducers/counter.jsx
export default function reducer(state = { counter: 0 }, action = {}) {
  const { counter } = state;
  const { type } = action;

  switch (type) {
    case "INCREASE":
      return { counter: counter + 1 };
    case "DECREASE":
      return { counter: counter - 1 };
    default:
      return { counter: 0 };
  }
}
```

React-Redux 的核心之一 connect 方法，用于从 UI 组件生成容器组件。connect 方法接受两个参数：`mapStateToProps` 和 `mapDispatchToProps`。它们定义了 UI 组件的业务逻辑。前者负责输入逻辑，即将 state 映射到 UI 组件的参数（props），后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。

```jsx
import App from "./store/app.jsx";
```

```jsx
// ./store/app.jsx
import { connect } from "react-redux";

import App from "./../components/app.jsx";
import {
  increaseAction,
  decreaseAction,
  resetAction
} from "./../actions/counter.jsx";

// mapStateToProps用户自己定义需要的状态
const mapStateToProps = state => ({ counter: state.counter });

const mapDispatchToProps = dispatch => ({
  onIncreaseHandle: () => dispatch(increaseAction),
  onDecreaseHandle: () => dispatch(decreaseAction),
  onResetHandle: () => dispatch(resetAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
```

Action 的 type 属性：

```jsx
// ./../actions/counter.jsx
export const increaseAction = { type: "INCREASE" };
export const decreaseAction = { type: "DECREASE" };
export const resetAction = { type: "RESET" };
```

接着，我们看一下熟悉的 App 组件应该怎么写：

```jsx
// import App from "./../components/app.jsx";
import React from "react";

class App extends React.Component {
  render() {
    let {
      counter,
      onIncreaseHandle,
      onDecreaseHandle,
      onResetHandle
    } = this.props;
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={onIncreaseHandle}>+1</button>
        <button onClick={onDecreaseHandle}>-1</button>
        <button onClick={onResetHandle}>0</button>
      </div>
    );
  }
}

export default App;
```

前期做了许多工作，这里如同从父组件里获取 props 属性般获取、触发等行为，所有 store 里的 state 都通过 connect 方法给处理了：

```js
connect(mapStateToProps, mapDispatchToProps)(App);
```

到这里，计数器基本的功能都好了，我的 [Demo](https://github.com/yangtao2o/myreact/tree/master/myredux/react-redux-counter)，阮一峰老师的 [Demo](https://github.com/jackielii/simplest-redux-example/blob/master/index.js)，以及讲解的文章，[Redux 入门教程（三）：React-Redux 的用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)，[让 react 用起来更得心应手——（react-redux）](https://juejin.im/post/5bcfce9ff265da0aa5294a25)。
