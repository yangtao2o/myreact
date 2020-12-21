import { useReducer } from 'react'

const DECREMENT = 'decrement'
const INCREMENT = 'increment'
const RESET = 'reset'

const initialState = { number: 0 }

function reducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case DECREMENT:
      return { number: state.number + 1 }
    case INCREMENT:
      return { number: state.number - 1 }
    case RESET:
      return { number: payload.number }
    default:
      return { number: state.number }
  }
}

export default function Example() {
  const [state, dispath] = useReducer(reducer, initialState)
  return (
    <div>
      当前值：{state.number}
      <button onClick={() => dispath({ type: DECREMENT })}>增加</button>
      <button onClick={() => dispath({ type: INCREMENT })}>减少</button>
      <button onClick={() => dispath({ type: RESET, payload: initialState })}>
        重置
      </button>
    </div>
  )
}
