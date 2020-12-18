import { useState } from 'react'

export default function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  console.log('outer', count)
  const handleClick = () => {
    setCount(count + 1)
    console.log('inner', count)
  }
  return (
    <div>
      <p>
        You clicked {count} {count2} times
      </p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => setCount2(count2 + 1)}>Click me</button>
    </div>
  )
}
