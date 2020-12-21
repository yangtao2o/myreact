import { useState, useEffect, useReducer, useRef } from 'react'

const REQUEST_INIT = Symbol('REQUEST_INIT')
const REQUEST_SUCCESS = Symbol('REQUEST_SUCCESS')
const REQUEST_FAILURE = Symbol('REQUEST_FAILURE')

const requestReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      }
    case REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      return console.error('出错了')
  }
}

// 请求数据、更新数据
export function useRequest(cb, isRequest) {
  const [isUpdate, setUpdate] = useState(false)
  const [param, setParam] = useState({})

  const [state, dispatch] = useReducer(requestReducer, {
    isLoading: false,
    isError: false,
    data: '',
  })

  useEffect(() => {
    let didCancel = false
    // 如果是 -1 初次不需要请求
    if (isRequest === -1) {
      return dispatch({ type: REQUEST_SUCCESS })
    }
    const requestData = async params => {
      dispatch({ type: REQUEST_INIT })
      try {
        const res = await cb(params)
        if (!didCancel) {
          dispatch({ type: REQUEST_SUCCESS, payload: res.data })
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: REQUEST_FAILURE })
        }
      }
    }

    requestData(param)

    return () => {
      didCancel = true
    }
  }, [isUpdate, param])

  const isUpdateHandle = () => setUpdate(!isUpdate)
  const onUpdateHandle = param => setParam(param)

  return { ...state, isUpdateHandle, onUpdateHandle }
}

// 使用 Debounce 防抖钩子函数
// export function useDebounce(cb, delay = 600, immediate = true) {
//   // 注：使用了 useRef 缓存了回调函数，所以变更状态无效
//   const ref = useRef(null)

//   if (!ref.current && typeof cb === 'function') {
//     ref.current = debounce(cb, delay, immediate)
//   }

//   return ref.current
// }

// 获取上一轮的 props 或 state
export function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}
