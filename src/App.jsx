import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (<div>
    <div className = "Head">
      <h1>Counter App</h1>
      <p>You can increase or decrease the counter value using the buttons below.</p>
      <h3>Lets get started!</h3>
      <h2>{count}</h2></div>
      <div className="Buttons">
      <button className="Increase" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="Decrease" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button className="Reset" onClick={() => setCount(0)}>
        Reset
      </button>
      <button className="Double" onClick={() => setCount(count * 2)}>
        Double
      </button>
      <button className="Half" onClick={() => setCount(count / 2)}>
        Half
      </button>
    </div>  
    </div>
 )}
 export default App;