import React from "react";

import Product from "./Product/Product";

const Products = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <h4 className="ps-3">
          <u>Popular Products</u>
        </h4>
        <div className="px-4 row">
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <Product />
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <Product />
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <Product />
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <Product />
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <Product />
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <Product />
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <Product />
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <Product />
          </div>{" "}
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <Product />
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <Product />
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <Product />
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <Product />
          </div>{" "}
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <Product />
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <Product />
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <Product />
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <Product />
          </div>{" "}
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <Product />
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <Product />
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <Product />
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <Product />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
