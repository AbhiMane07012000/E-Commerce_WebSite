import React from "react";

import Headphones from "../../../../Assets/products/earbuds-prod-1.webp";


const Category = () => {
  return (
    <>
      <div class="card bg-info bg-opacity-25 ">
        
        <p className="h1 z-1">Category</p>
        <img src={Headphones} className="card-img-top" alt="..." />
      
      </div>
    </>
  );
};

export default Category;
