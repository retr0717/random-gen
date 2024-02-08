import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState(0);

  function generateRandom(maxLimit = 100){
    let rand = Math.random() * maxLimit;  
    rand = Math.floor(rand); // 99
  
    return rand;
  }

  return (
    <>
      <div>
      </div>
      <h1>{num}</h1>
      <div className="card">
        <button onClick={() => setNum(() => generateRandom(100))}>
          Change
        </button>
      </div>
    </>
  )
}

export default App
