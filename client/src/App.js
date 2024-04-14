import './App.css';
import React, { useEffect,useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Category from './Component/Category/Category';
import SingleProduct from './Component/Home/Products/SingleProduct/SingleProduct'
import Newsletter from './Component/Footer/Newsletter/Newsletter';
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';
import Cart from './Component/Cart/Cart';
import Login from './Component/Login/Login'
import { useLocation } from "react-router-dom";
import Products from './Component/Home/Products/Products';
import { fetchDataFromApi } from './utils/api';
import { setProducts } from './Store/shopifySlice';
import { useDispatch,useSelector } from 'react-redux';
import Success from './Component/Success/Success';
import Failed from './Component/Failed/Failed';





function App() {

  const dispatch =useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
}, [location]);

const allproduct = useSelector((state) => state.shopify.products);

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
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/category/:id' element={<Category />}/>
      <Route path='/about' element={<About/>} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/products' element={<Products  allproduct={allproduct} />}/>
      <Route path='/product/:id' element={<SingleProduct/>} />
      <Route path='/login' element={<Login />}/>
      <Route path='/success' element={<Success />}/>
      <Route path='/Failed' element={<Failed />}/>

    </Routes>
    <Newsletter />
    <Footer />
    
   
   </React.Fragment>
  );
}

export default App;
