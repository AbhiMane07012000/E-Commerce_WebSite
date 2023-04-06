import React from "react";

import "./Product.css";

const Product = (props) => {
  return (
    <React.Fragment>
      <div className="product-transform card bg-primary-subtle m-3">
        <img src={props.img} className=" card-img-top" alt="..." />
        <div className="card-body">
          <p className="text-dark h6 product-title fw-bold card-title">
            <small>{props.title}</small>
          </p>
          <p className="text-dark fw-bolder card-text">₹{props.price}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
