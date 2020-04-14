import React, { useState, useEffect } from "react";
// 对比 Class Component 中将组件状态放在state属性中维持的做法，
// React Hook 使用useState方法来在 Function Component 中创建状态变量、创建改变状态的方法、传入初始状态。
// 这样就实现了一个拥有自己的状态的 Function Component。
// 显而易见，无论是简洁程度还是优雅程度，Function Component 都要远远优于 Class Component。
function Counter() {
  const [count, setCount] = useState(0);
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default Counter;