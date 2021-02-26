import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';
import Login from "./components/Login";
import "./styles.scss";


//Set up a private route for the bubble page
function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Login} />
      <PrivateRoute path='/bubbles' component={BubblePage} />
    </div>
  </Router>
  );
}

export default App;


//Task List:
//1. Render BubblePage as a PrivateRoute ✔️