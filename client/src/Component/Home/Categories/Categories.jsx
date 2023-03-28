import React from "react";

import Category from "./Category/Category";

import "./Categories.css";

import { useSelector } from "react-redux";

const Categories = () => {
  const allCategoriesData = useSelector((state) => {
    return state.shopify.categories;
  });

  return (
    <div className="container-fluid">
      <h3 className="pt-4 ps-3">
        <u>Categories</u>
      </h3>
      <div className="p-4 row d-sm-flex  justify-content-center">
        {allCategoriesData.data.map((category) => {
          return (
            <div className="py-1 col col-lg-3 col-md-6 col-sm-12">
              <Category key={category.id} img={process.env.REACT_APP_STRIPE_APP_DEV_URL+category.attributes.img.data.attributes.url} />
            </div>
          );
        })}
  
      </div>
    </div>
  );
};

export default Categories;
