import React from "react";
import { NavLink } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SpeakerIcon from "@mui/icons-material/Speaker";
import WatchIcon from "@mui/icons-material/Watch";
import EarbudsIcon from '@mui/icons-material/Earbuds';
import './Footer.css'

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container-fluid footer">
        <div className="p-5 row">
          <div className="p-5 col col-lg-3 col-md-6 col-sm-12">
            <h6>About</h6>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat.
            </p>
          </div>
          <div className="p-5 col col-lg-3 col-md-6 col-sm-12">
            <h6>Contact</h6>
            <div className="py-1 d-flex d-xxl-flex flex-row">
              <LocationOnIcon /> <p>Old Sanghvi, Pune-411027</p>
            </div>
            <div className="py-1 d-flex d-xxl-flex flex-row">
              <LocalPhoneIcon /> <p>+91889999558742</p>
            </div>
            <div className="py-1 d-flex d-xxl-flex flex-row">
              <EmailIcon /> <p>shopify_example@email.com</p>
            </div>
          </div>
          <div className="p-5 col col-lg-3 col-md-6 col-sm-12">
            <h6>Categories</h6>
            <NavLink className="py-1 nav-link" to="/category/1">
              <div className="py-1 d-flex d-xxl-flex flex-row">
                <HeadphonesIcon /> <p className="ps-1">Headphones</p>
              </div>
            </NavLink>
            <NavLink className="py-1 nav-link" to="/category/4">
              <div className="py-1 d-flex d-xxl-flex flex-row">
                <WatchIcon /> <p className="ps-1">Smart Watches</p>
              </div>
            </NavLink>
            <NavLink className="py-2 nav-link" to="/category/3">
              <div className="py-1 d-flex d-xxl-flex flex-row">
                <SpeakerIcon /> <p className="ps-1">Speakers</p>
              </div>
            </NavLink>
            <NavLink className="py-2 nav-link" to="/category/2">
              <div className="py-1 d-flex d-xxl-flex flex-row">
                <EarbudsIcon /> <p className="ps-1">Wireless Earbuds</p>
              </div>
            </NavLink>
          </div>
          <div className="p-5 col col-lg-3 col-md-6 col-sm-12">
            <h6>Pages</h6>
            <NavLink className="py-1 nav-link" to="/">
              <p>Home</p>
            </NavLink>
            <NavLink className="py-1 nav-link" to="/products">
               <p> All Products</p>
            </NavLink>
            <NavLink className="py-1 nav-link" to="/about">
              <p>About</p>
            </NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
