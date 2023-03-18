import React from "react";

import './Banner.css'

import BannerImage from "../../../Assets/banner-img.png";

const Banner = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col content">
          <h1>Sales</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div className="col image">
          <img className="banner-img" src={BannerImage} alt="banner-img" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
