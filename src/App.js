import React, { Component } from 'react';
//import { Row, Jumbotron } from "react-bootstrap";
import { Router, Route, browserHistory } from "react-router";

import {Home} from "./Home";
import {Goals} from "./Goals";
import {Survey} from './Survey'

import './App.css';

// <Route path={"/picker"} component={Picker} />            
// for stock picker path?

class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Home} />
        <Route path={"/goals"} component={Goals} />
        <Route path={"/survey"} component={Survey} />
      </Router>
    );
  } 
}

export default App;

//      <div className="App">
//        <div className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <h2>Welcome to React</h2>
//        </div>
//       <p className="App-intro">
//          To get started, edit <code>src/App.js</code> and save to reload.
//        </p>
//      </div> 