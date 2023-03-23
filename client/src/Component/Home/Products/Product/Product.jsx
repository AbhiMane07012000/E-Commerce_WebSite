import React from "react";
// import { NavLink } from 'react-router-dom';

import ProductImg from "../../../../Assets/products/earbuds-prod-1.webp";

import "./Product.css";

const Product = () => {
  return (
    <React.Fragment>
      <div class="card product-card m-2 bg-dark d-flex flex-coloum justify-content-center ">
        <img  src={ProductImg} class="card-img-top" alt="..." />
        <div class="card-body">
        <h6 class="text-white card-title">Card title</h6>
          <p class="text-white card-text">
          ₹ 499
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
