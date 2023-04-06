import React from "react";

import { useNavigate } from "react-router-dom";

import Product from "./Product/Product";

const Products = (props) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="container-fluid">
        {!props.innerPage && (
          <h4 className="ps-3">
            <u>{props.headingText}</u>
          </h4>
        )}
        <div className="px-4 row">
          {props.allproduct?.data?.map((product) => (
            <div
              className="col col-lg-3 col-md-4 col-sm-6"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <Product
                key={product.id}
                title={product.attributes.title}
                img={
                  process.env.REACT_APP_STRIPE_APP_DEV_URL +
                  product.attributes.img.data[0].attributes.url
                }
                price={product.attributes.price}
              />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
