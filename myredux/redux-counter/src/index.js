import { createStore } from "redux";

/* 创建reducer
** 可以使用单独的一个reducer,也可以将多个reducer合并为一个reducer，即：combineReducers()
** action发出命令后将state放入reucer加工函数中，返回新的state,对state进行加工处理
*/
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

/* 创建action
** 用户是接触不到state的，只能有view触发，所以，这个action可以理解为指令，需要发出多少动作就有多少指令
** action是一个对象，必须有一个叫type的参数，定义action类型
*/
const actions = {
  increase: () => ({ type: "INCREASE" }),
  decrease: () => ({ type: "DECREASE" })
};

/* 创建的store，使用createStore方法
** store 可以理解为有多个加工机器的总工厂
** 提供subscribe，dispatch，getState这些方法。
*/ 

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(actions.increase());  // {counter: 1}
store.dispatch(actions.increase());  // {counter: 2}
store.dispatch(actions.increase());  // {counter: 3}
store.dispatch(actions.decrease());  // {counter: 2}
