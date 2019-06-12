import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import RenderLists from "../RenderLists/RenderLists";
import { SpaceForm } from "../SpaceForm/SpaceForm";
import "./Navbar.css";

const Navbar = () => (
  <Router>
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/render-lists">Render List</Link>
      <Link to="/space-form">Space Form</Link>
    </div>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/render-lists" component={RenderLists} />
      <Route path="/space-form" component={SpaceForm} />
    </div>
  </Router>
);

export default Navbar;
