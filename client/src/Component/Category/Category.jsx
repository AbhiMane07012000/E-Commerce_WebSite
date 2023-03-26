import React from "react";
import Products from "../Home/Products/Products";
 

const Category = () => {
  return (
    <div className="px-5 py-5 container">
      <p className=" h2">
        <u>Category title</u>
      </p>
      <Products innerPage="true" />
    </div>
  );
};

export default Category;
