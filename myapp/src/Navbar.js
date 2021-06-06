import React from "react";
import { Switch, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Switch>
        <Link to ="/products">products</Link>
      </Switch> 
    <Switch>
        <Link to ="/about">about</Link>
      </Switch>

    </div>
 );
} 
export default Navbar;