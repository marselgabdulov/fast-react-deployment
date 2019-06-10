import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import RenderLists from "../RenderLists/RenderLists";
import "./Navbar.css";

const Navbar = () => (
  <Router>
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/render-lists">Render List</Link>
    </div>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/render-lists" component={RenderLists} />
    </div>
  </Router>
);

export default Navbar;
