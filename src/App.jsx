import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h3>Contador</h3>
    <h1 />
    <h1>{count}</h1>
    <button 
    onClick={() => {
    setCount(count + 1);
    
    }}
    type="button"
    className="btn btn-primary"
    >+1</button>

   <button 
    onClick={() => {
    setCount(count - 1);
    
    }}
    type="button"
    className="btn btn-dark"
    >-1</button>

   <button 
    onClick={() => {
    setCount(0);
    
    }}
    type="button"
    className="btn btn-Light"
    >0</button>

    
    </div>
  )
}

export default App