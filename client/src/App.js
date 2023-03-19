import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Category from './Component/Home/Category/Category';
import SingleProduct from './Component/Home/SingleProduct/SingleProduct'
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';
import Cart from './Component/Cart/Cart';


function App() {
  return (
   <React.Fragment>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/category' element={<Category />}/>
      <Route path='/about' element={<About/>} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/product/:id' element={<SingleProduct/>} />
    </Routes>
    <Footer />
   </React.Fragment>
  );
}

export default App;
