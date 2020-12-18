import { useState, useRef } from 'react'

export default function Example() {
  const [text, setText] = useState('')
  const inputEl = useRef(null)
  const oldText = useRef('旧数据')

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
    </div>
  )
}
