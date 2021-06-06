
import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./Navbar"; 
import products from "./Views/products";
import about from "./Views/about"


function App() {
  return (
    <div>
      <Router>
        <Navbar />
      <Route path="/products">
          <products />
      </Route>
      <Route path="/about">
          <about /> 
        </Route>
        <Route path="/" exact>
          <h1>Home Content</h1>
        </Route>
      </Router>
</div>
  );
}

export default App;
