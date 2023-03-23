import React from "react";
// import { NavLink } from 'react-router-dom';

import ProductImg from "../../../../Assets/products/earbuds-prod-1.webp";

import "./Product.css";

const Product = () => {
  return (
    <React.Fragment>
      <div class="card product-card m-3">
        <img src={ProductImg} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="text-white card-title">Card title</p>
          <p class="text-white card-text">₹ 499</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
