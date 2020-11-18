import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentClass from './ComponentClass'
import ParentComponent from './component/ParentComponent';
import ReactPic from './Pic/React icon.png'

function App() {
  const style = {
    fontSize : "36px"
  }
  return (
    <div className="App">
      <p id = "content" style={style}>content</p>
      <ParentComponent/>
      <img src={ReactPic}/>
      <ComponentClass/>
      {/* <ComponentClass/>
      <ComponentClass/> */}
    </div>
  );
}

export default App;
