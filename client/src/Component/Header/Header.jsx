import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/bag.png";
import CartIcon from "@mui/icons-material/ShoppingCart";
import {useSelector} from 'react-redux';

const Header = () => {

  const cartItems = useSelector((state) => state.shopify.cartItems);

  return (
    <React.Fragment>
      <nav className="sticky-top navbar navbar-expand-lg bg-black  navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" />
            <span className="brand-name">SHOPiFY</span>
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
            <div className="navbar-nav ms-auto p-1">
              <NavLink className="  nav-link" to="/">
              <button className="btn border-0 fw-medium text-white">Home</button>
              </NavLink>
              <NavLink className="  nav-link" to="/products">
              <button className="btn border-0 fw-medium text-white">Products</button>
              </NavLink>
              <NavLink className=" nav-link" to="/about">
                <button className="btn border-0 fw-medium text-white">About</button>
              </NavLink>
              <NavLink className="nav-link" to="/cart">
                  <button className="btn border-0 text-white postion-relative">
                  {<CartIcon />}<span className="position-absolute top-0 end-0 m-3  badge bg-white text-dark rounded-pill d-none d-lg-block">{cartItems.length} </span>
                  </button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
