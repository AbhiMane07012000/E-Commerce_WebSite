import React from "react";
// import { NavLink } from 'react-router-dom';

import ProductImg from "../../../../Assets/products/earbuds-prod-1.webp";

import "./Product.css";

const Product = () => {
  return (
    <React.Fragment>
      <div className="card product-card m-3">
        <img src={ProductImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="text-white card-title">Card title</p>
          <p className="text-white card-text">₹ 499</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
