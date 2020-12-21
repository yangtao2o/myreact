import { useState } from 'react'
import './App.css'
import DemoUseState from './components/DemoUseState'
import DemoUseEffect from './components/DemoUseEffect'
import DemoUseReducer from './components/DemoUseReducer'
import DemoUseMemo from './components/DemoUseMemo'
import Counter from './components/Counter'

function App() {
  const [tab, setTab] = useState(true)

  return (
    <div className="App">
      <Counter />
      <DemoUseReducer />
      <DemoUseMemo />
      <button type="button" onClick={() => setTab(!tab)}>
        切换
      </button>
      {tab ? <DemoUseState /> : <DemoUseEffect />}
    </div>
  )
}

export default App
