import React from "react";

import Category from "./Category/Category";

import "./Categories.css";

const Categories = () => {
  return (
    <div className="container-fluid">
      <h3 className="pt-4 ps-3">
        <u>Categories</u>
      </h3>
      <div className="p-4 row d-sm-flex  justify-content-center">
        <div className="py-1 col col-lg-3 col-md-6 col-sm-6">
          <Category />
        </div>
        <div className="py-1 col col-lg-3 col-md-6 col-sm-6">
          <Category />
        </div>
        <div className="py-1 col  col-lg-3 col-md-6 col-sm-6">
          <Category />
        </div>
        <div className="py-1 col col-lg-3 col-md-6 col-sm-6">
          <Category />
        </div>
      </div>
    </div>
  );
};

export default Categories;
