import React from "react";
import { NavLink } from "react-router-dom";
import { LoginBtn } from "../LoginBtn/LoginBtn";

import "./Navbar.scss";

export const Navbar = ({ smallDisplayMode }) => {
  return (
    <nav className="navbar navbar-dark navbar-expand p-0 px-2 d-flex justify-content-between">
      {!smallDisplayMode && (
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            &lt;WebPage Builder/&gt;
          </NavLink>
        </div>
      )}
      <ul className={smallDisplayMode ? 'nav flex-column' : "navbar-nav"}>
        <li className="nav-item" href="#">
          <NavLink className="nav-link text-white" to="/" exact>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/Constructor">
            Constructor
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/Viewing">
            Viewing
          </NavLink>
        </li>
      </ul>
      {smallDisplayMode && 
      <div className='p-3'><LoginBtn /></div>}
    </nav>
  );
};
