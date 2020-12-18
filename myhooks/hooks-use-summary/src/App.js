import { useState } from 'react'
import './App.css'
import DemoUseState from './components/DemoUseState'
import DemoUseEffect from './components/DemoUseEffect'
import Counter from './components/Counter'
import DemoUseRef from './components/DemoUseRef'

function App() {
  const [tab, setTab] = useState(true)

  return (
    <div className="App">
      <Counter />
      <DemoUseRef />
      <button type="button" onClick={() => setTab(!tab)}>
        切换
      </button>
      {tab ? <DemoUseState /> : <DemoUseEffect />}
    </div>
  )
}

export default App
