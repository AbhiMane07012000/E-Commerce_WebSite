import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Category from './Component/Category/Category';
import SingleProduct from './Component/Home/Products/SingleProduct/SingleProduct'
import Newsletter from './Component/Footer/Newsletter/Newsletter';
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';
import Cart from './Component/Cart/Cart';

import store from './store/store'
import {Provider} from 'react-redux'




function App() {
  return (
   <React.Fragment>
    <Provider store={store}>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/category/:id' element={<Category />}/>
      <Route path='/about' element={<About/>} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/product/:id' element={<SingleProduct/>} />
    </Routes>
    <Newsletter />
    <Footer />
    </Provider>
   
   </React.Fragment>
  );
}

export default App;
