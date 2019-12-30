# 计数器 Redux-Counter

> 目的：采用状态管理的多种方式：实现一个计数器，可以加一，减一，置零。

## Start

```shell
npm i

npm start
```

## React state

```js
import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleClick(actions) {
    switch (actions) {
      case "INCREASE":
        return this.setState((state, props) => ({
          value: ++state.value
        }));
      case "DECREASE":
        return this.setState((state, props) => ({
          value: --state.value
        }));
      default:
        return this.setState({
          value: 0
        });
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <button onClick={() => this.handleClick("INCREASE")}>+1</button>
        <button onClick={() => this.handleClick("DECREASE")}>-1</button>
        <button onClick={() => this.handleClick("RESET")}>0</button>
      </div>
    );
  }
}
```

## Redux

第一步：创建 reducer

- 可以使用单独的一个 reducer,也可以将多个 reducer 合并为一个 reducer，即：combineReducers()
- action 发出命令后将 state 放入 reucer 加工函数中，返回新的 state,对 state 进行加工处理

```js
const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INCREASE":
      return { counter: state.counter + 1 };
    case "DECREASE":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};
```

第二步：创建 action

- 用户是接触不到 state 的，只能有 view 触发，所以，这个 action 可以理解为指令，需要发出多少动作就有多少指令
- action 是一个对象，必须有一个叫 type 的参数，定义 action 类型

```js
const actions = {
  increase: () => ({ type: "INCREASE" }),
  decrease: () => ({ type: "DECREASE" })
};
```

第三步：创建的 store，使用 createStore 方法

- store 可以理解为有多个加工机器的总工厂
- 提供 subscribe，dispatch，getState 这些方法。

```js
const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(actions.increase()); // {counter: 1}
store.dispatch(actions.increase()); // {counter: 2}
store.dispatch(actions.increase()); // {counter: 3}
store.dispatch(actions.decrease()); // {counter: 2}
```

具体代码如下：

```js
import React from "react";
import { createStore } from "redux";

const reducer = (state = { counter: 0 }, action = {}) => {
  const { type } = action;
  const { counter } = state;
  switch (type) {
    case "INCREASE":
      return { counter: counter + 1 };
    case "DECREASE":
      return { counter: counter - 1 };
    default:
      return { counter: 0 };
  }
};

const store = createStore(reducer);

export default class CounterRedux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.unsubscribe = null;
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      });
    });
  }
  componentWillUnmount() {
    // 取消订阅
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={() => store.dispatch({ type: "INCREASE" })}>+1</button>
        <button onClick={() => store.dispatch({ type: "DECREASE" })}>-1</button>
        <button onClick={() => store.dispatch({ type: "RESET" })}>0</button>
      </div>
    );
  }
}
```

action 可以单独出来：

```js
const actions = {
  increase: () => ({ type: "INCREASE" }),
  decrease: () => ({ type: "DECREASE" }),
  reset: () => ({ type: "RESET" })
};
// 触发
<button onClick={() => store.dispatch(actions.increase())}>+1</button>;
```

主要是为了展示 redux 的一个工作流程，并没有把状态挂载在最顶层，详细完整版可以参考阮一峰老师的代码：[Redux Counter Example](https://github.com/reduxjs/redux/tree/master/examples/counter)。

Redux 的工作流程图，[阮一峰博客文章](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)摘录:

![Redux-Flow](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016091802.jpg)
