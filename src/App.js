import React, { Component } from 'react';
import { Router, Route, browserHistory } from "react-router";

import {Home} from "./Home";
import {Goals} from "./Goals";
import {Survey} from "./Survey";

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
