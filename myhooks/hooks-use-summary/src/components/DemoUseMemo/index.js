import React, { useState, useMemo, useCallback } from 'react'

const Child = React.memo(function ({ getCount }) {
  return <h4>传过来的Count值：{getCount()}</h4>
})

export default function DemoUseMemo() {
  const [count, setCount] = useState(1)
  const [val, setValue] = useState('')

  // 普通调用
  const getCount = () => {
    console.log('normal-result')
    return count
  }

  // 使用 useMemo
  const getCountWithMemo = useMemo(() => {
    console.log('useMemo-result')
    return count
  }, [count])

  // 使用 useCallback
  const getCountWithCallback = useCallback(() => {
    console.log('useCallback-result')
    return count
  }, [count])

  return (
    <div>
      <h4>
        Count：{getCount()}, {getCountWithMemo}
      </h4>
      <Child getCount={getCountWithCallback} />
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <input value={val} onChange={event => setValue(event.target.value)} />
      </div>
    </div>
  )
}
