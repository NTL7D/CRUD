import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="h3">
        <h3 style={{ textDecoration: "none" }}>
          ReactJS, NodeJS, MySQL Practice
        </h3>
      </NavLink>
      <div className="nav-group">
        <NavLink to="/add" className="nav-btn">
          Add user
        </NavLink>
        <NavLink to="/xamfquas" className="nav-btn">
          Error 404
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
