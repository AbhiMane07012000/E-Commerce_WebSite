import React from "react";

import Category from "./Category/Category";

import "./Categories.css";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';


const Categories = (props) => {
  
  const allcategories = useSelector((state) => state.shopify.categories);

  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <h3 className="pt-4 ps-3">
        <u>Categories</u>
      </h3>
      <div  className="p-4 row d-sm-flex  justify-content-center">       
         { 
            
            allcategories?.data?.map((category)=>(
                <div className="py-1 col col-lg-3 col-md-6 col-sm-12" onClick={()=> navigate(`/category/${category.id}`) } >
                <Category
                  key={category.id}
                  img={
                    process.env.REACT_APP_STRIPE_APP_DEV_URL +
                    category.attributes.img.data.attributes.url
                  }
                  
                />
              </div>
              ))
          }

      </div>
    </div>
  );
};

export default Categories;
