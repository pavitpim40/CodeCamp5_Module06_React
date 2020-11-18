import React from "react";
import logo from "./logo.svg";
import "./App.css";

//------------------  ทำแบบ Class Component -----------------------//
class App extends React.Component {
  state = {
    value: 0
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div>{this.state.value}</div>
          <div>
            <button
              onClick={() => this.setState({ value: this.state.value + 1 })}
            >
              +
            </button>
            <button onClick={() => this.setState({ value: 0 })}>
              {" "}
              Refresh{" "}
            </button>
            <button
              onClick={() => this.setState({ value: this.state.value - 1 })}
            >
              {" "}
              -{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
