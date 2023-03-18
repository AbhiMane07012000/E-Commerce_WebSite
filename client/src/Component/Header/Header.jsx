import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/bag.png";

const Header = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-info navbar-info">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
           <img src={Logo} alt="Logo" /><span className="Brand">Shop It</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/Category">
                Category
              </NavLink>
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;