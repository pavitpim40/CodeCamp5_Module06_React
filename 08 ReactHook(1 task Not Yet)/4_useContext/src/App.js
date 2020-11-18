import React , {useState} from 'react';
import Home from './component/home'
import './App.css';
import Context , { Context2 } from './Context'
function App() {
  const [state, setState] = useState({content : "Hello W"})
  return (
    <Context2.Provider value={{state, setState}}>
         <Home/>
    </Context2.Provider>
 
  );
}

export default App;
