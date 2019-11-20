import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Tato from './components/tato'
//import Demo from 'my-npm-test-2'
import A,{C1} from 'tato-npm-test'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div>
            <C1 a={1} b={5}/>
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
