import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Route exact path="/Login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/Homepage" component={Homepage} />
    </div>
  );
}

export default App;
