import { useState, useRef, useEffect } from 'react'
import { usePrevious } from '../useHooks'

export default function Example() {
  const [text, setText] = useState('')
  const [count, setCount] = useState(0)
  const [isStop, setStop] = useState(false)
  const inputEl = useRef(null)
  const oldText = useRef('旧数据')
  const timerID = useRef()

  const value = usePrevious(text)
  console.log(value)

  useEffect(() => {
    timerID.current = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => clearInterval(timerID.current)
  }, [count])

  useEffect(() => {
    return () => clearInterval(timerID.current)
  }, [isStop])

  const onButtonClick = () => {
    inputEl.current.focus() // `current` 指向已挂载到 DOM 上的文本输入元素
  }
  const handleChange = e => {
    setText(e.target.value)
    oldText.current = e.target.value
  }

  return (
    <div>
      <p>
        {text} {oldText.current}
      </p>
      <input ref={inputEl} type="text" onChange={handleChange} />
      <button onClick={onButtonClick}>Focus the input</button>
      <button
        onClick={() => {
          setStop(true)
        }}
      >
        Count: {count}
      </button>
      <hr />
    </div>
  )
}
