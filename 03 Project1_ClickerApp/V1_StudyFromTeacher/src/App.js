//import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'


class App extends Component {
  state = {
    value : 0 
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <div className="number">{this.state.value}</div>
          <div className="buttonContainer">
            <button onClick={()=> this.setState({value : this.state.value +1})}>+</button>
            <button onClick={()=> this.setState({value : 0})}>refresh</button>
            <button onClick={()=> this.setState({value : this.state.value -1})}>-</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
