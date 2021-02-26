import React from 'react'
import './App.css'
import { AppContext } from './context'
import Counter from './components/counter'
import Contexter from './components/contexter'

function App() {
  return (
    <AppContext.Provider
      value={{
        username: 'Taotao'
      }}
    >
      <div className="App">
        <Counter />
        <Contexter />
      </div>
    </AppContext.Provider>
  )
}

export default App
