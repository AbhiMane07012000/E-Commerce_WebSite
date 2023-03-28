import React, {useEffect} from "react";

import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";

import { fetchDataFromApi } from "../../utils/api";

import {useDispatch} from 'react-redux'
import { setCategory } from "../../store/slices/shopifySlice";


const Home = () => {

  const dispatch = useDispatch(); 


  useEffect(()=>{
    getCategories();
  },[])  

  const getCategories=() =>{
      fetchDataFromApi("/api/categories?populate=*").then(res=>{
        dispatch(setCategory(res));
      })
  }

  return (
    <React.Fragment>
        <Banner />
        <Categories />
        <Products headingText="Popular Product" />
    </React.Fragment>
  );
};

export default Home;
