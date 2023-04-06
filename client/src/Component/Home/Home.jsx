import React, { useCallback, useEffect } from "react";

import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";

import { fetchDataFromApi } from "../../utils/api";

import {  useDispatch ,useSelector} from "react-redux";
import { setCategories, setProducts } from "../../Store/shopifySlice";



const Home = () => {
  
  
  const dispatch = useDispatch();
  const allproduct = useSelector((state) => state.shopify.products);

  const getCategories = useCallback( async () => {
    try {
      const data = await fetchDataFromApi("/api/categories?populate=*");

      dispatch(setCategories(data));
    } catch (err) {
      console.log(err);
      return err;
    }
  },[dispatch])
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const getProducts = useCallback(async () => {
    try {
      const data = await fetchDataFromApi("/api/products?populate=*");
      dispatch(setProducts(data));
    } catch (err) {
      console.log(err);
      return err;
    }
  }, [dispatch]);
 
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <React.Fragment>
      <Banner />
      <Categories key="Cat" />
      <Products  headingText="Popular Product" allproduct={allproduct} />
    </React.Fragment>
  );
};

export default Home;
