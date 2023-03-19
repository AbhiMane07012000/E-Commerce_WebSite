import React from "react";

import './Banner.css'

import BannerImage from "../../../Assets/banner-img.png";

const Banner = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col col-xs-12 col-sm-12 col-md-10 col-lg-6 col-xl-6 col-xxl-6  content">
          <div className="px-5 py-5">
          <h1 >SALES</h1>
          <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
          <button className="px-5 py-2 btn btn-outline-light" >SHOP NOW</button>
          </div>
         
        </div>
        <div className="col col-lg-6 col-xl-6 col-xxl-6  d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block image">
          <img className="p-5 banner-img" src={BannerImage} alt="banner-img" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
