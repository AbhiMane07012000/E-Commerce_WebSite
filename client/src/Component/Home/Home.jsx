import React from "react";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";

const Home = () => {
  return (
    <React.Fragment>
      
        <Banner />
        <Categories />
        <Products />
    </React.Fragment>
  );
};

export default Home;
