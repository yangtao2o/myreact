# 动手实现 Redux

## 主要内容

我们从一个非常原始的代码开始，不停地在发现问题、解决问题、优化代码的过程中进行推演，最后把 Redux 模式自己总结出来了。这就是所谓的 Redux 模式，我们再来回顾一下这几节我们到底干了什么事情。

我们从一个简单的例子的代码中发现了共享的状态如果可以被任意修改的话，那么程序的行为将非常不可预料，所以我们提高了修改数据的门槛：你必须通过 dispatch 执行某些允许的修改操作，而且必须大张旗鼓的在 action 里面声明。

这种模式挺好用的，我们就把它抽象出来一个 createStore，它可以产生 store，里面包含 getState 和 dispatch 函数，方便我们使用。

后来发现每次修改数据都需要手动重新渲染非常麻烦，我们希望自动重新渲染视图。所以后来加入了订阅者模式，可以通过 store.subscribe 订阅数据修改事件，每次数据更新的时候自动重新渲染视图。

接下来我们发现了原来的“重新渲染视图”有比较严重的性能问题，我们引入了“共享结构的对象”来帮我们解决问题，这样就可以在每个渲染函数的开头进行简单的判断避免没有被修改过的数据重新渲染。

我们优化了 stateChanger 为 reducer，定义了 reducer 只能是纯函数，功能就是负责初始 state，和根据 state 和 action 计算具有共享结构的新的 state。

createStore 现在可以直接拿来用了，套路就是：

```js
// 定一个 reducer
function reducer (state, action) {
  /* 初始化 state 和 switch case */
}

// 生成 store
const store = createStore(reducer)

// 监听数据变化重新渲染页面
store.subscribe(() => renderApp(store.getState()))

// 首次渲染页面
renderApp(store.getState())

// 后面可以随意 dispatch 了，页面自动更新
store.dispatch(...)
```

以上内容原文见这里：[动手实现 Redux（六）：Redux 总结](http://huziketang.mangojuice.top/books/react/lesson35)

## 参考资料

- [动手实现 Redux（一）：优雅地修改共享状态](http://huziketang.mangojuice.top/books/react/lesson30)
