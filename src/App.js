import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {Switch, Route, withRouter,BrowserRouter } from "react-router-dom";
import SignUp from "./components/Pages/SignUp";
import SignIn from "./components/Pages/SignIn";
import Home from "./components/Pages/Home";



function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <Switch>
          <Route exact path="/signup" component={SignUp} /> 
          <Route path="/signin" component={SignIn} /> 
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
