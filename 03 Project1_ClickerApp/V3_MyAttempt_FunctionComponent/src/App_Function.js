import React , { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={{textAlign : "center"}}>
      <div className="container">
        <div className="number">{count}</div>
        <div className="buttonContainer">
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(0)}>Refresh</button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
