import React from 'react'
import Header from './components/Header'
import Content from './components/Content'

import { ThemeContext } from './theme-context'

function createStore(reducer) {
  let state = null
  const listeners = []
  const subscribe = listener => listeners.push(listener)
  const getState = () => state
  const dispatch = action => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }
  dispatch({}) // 初始化 state
  return { getState, dispatch, subscribe }
}

const themeReducer = (state, action) => {
  if (!state)
    return {
      themeColor: 'red',
    }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

const store = createStore(themeReducer)

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={store}>
        <Header />
        <Content />
      </ThemeContext.Provider>
    )
  }
}

export default App
