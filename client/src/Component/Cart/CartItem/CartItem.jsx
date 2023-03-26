import React from "react";
import ProductImg from '../../../Assets/products/earbuds-prod-1.webp'

const CartItem = () => {
  return (
    <div class="card">
      <img src={ProductImg} class=" card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title fw-semibold">Product Title</h5>
        <p class="card-text">
        ₹Price
        </p>
      </div>
    </div>
  );
};

export default CartItem;
