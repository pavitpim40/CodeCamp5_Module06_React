import React , {useContext} from "react";
import logo from "../logo.svg";
import Context, { Context2 } from "../Context";

const Home = () => {
    // จะใช้  useContext หรือ Context.Consumer ก็ได้
    const obj = useContext(Context2)
    console.log({...obj})
  return (
    <Context2.Consumer>
      {({state,setState}) => (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
              <span>{state.content}</span>
            </p>
            <button onClick={()=>setState({content : "Hi People"})}>Change</button>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <div>this is a value from context : {state.content} </div>
        </div>
      )}
    </Context2.Consumer>
  );
};
export default Home;
