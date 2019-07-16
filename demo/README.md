## 学习 React 的 Demo

### 资料

- [React 入门实例教程](http://www.ruanyifeng.com/blog/2015/03/react.html) --- 阮一峰
- [react-demos](https://github.com/ruanyf/react-demos)

### Demo01: Render JSX

[Demo](https://github.com/yangtao2o/myreact/demo/01/) / [Source](https://github.com/yangtao2o/myreact/demo/01/index.html)

初始化咱先 Hello 一下，使用 jsx 语法，碰到代码块使用（{ }）包起来，碰到 html 标签，就使用（< />）:

```javascript
var names = ["AAA", "BBB", "CCC"];
ReactDOM.render(
  <div>
    {names.map(function(name) {
      return <h2>Hello, {name}!</h2>;
    })}
  </div>,
  document.getElementById("example")
);
```

### Demo02: Use Array in JSX

[Demo](https://github.com/yangtao2o/myreact/demo/02/) / [Source](https://github.com/yangtao2o/myreact/demo/02/index.html)

如果 JavaScript 的变量是个数组，会展开这个数组的所有项.

```javascript
var arr = [<h1 key="h1">Hello,</h1>, <h2 key="h2">React is awesome!</h2>];
ReactDOM.render(<div>{arr}</div>, document.getElementById("example"));
```

### Demo03: Component

[Demo](https://github.com/yangtao2o/myreact/demo/03/) / [Source](https://github.com/yangtao2o/myreact/demo/03/index.html)

变量 HelloMsg 是一个组件类。模板插入 <HelloMsg /> 时，会自动生成 HelloMsg 的一个实例。所有组件类都必须有自己的 render 方法，用于输出组件。

```javascript
class HelloMsg extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
ReactDOM.render(
  <HelloMsg name="Dataozi" />,
  document.getElementById("example")
);
```
