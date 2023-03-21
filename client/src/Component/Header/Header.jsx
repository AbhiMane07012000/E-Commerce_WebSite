import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/bag.png";
import CartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <React.Fragment>
      <nav className="sticky-top navbar navbar-expand-lg bg-black  navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
           <img src={Logo} alt="Logo" /><span className="brand-name">SHOPiFY</span>
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
              <NavLink className="nav-link" to="/Cart">
                {<CartIcon />} 
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
