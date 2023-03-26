import React from 'react'
import CartItem from './CartItem/CartItem'

const Cart = () => {
  return (
      <>
      <div className='container-fluid'> 
        <div className="p-5 row">
          <p className='fs-2 fw-semibold'> <u>Cart</u></p>
          <div className=" col-lg-4 col-md-4  col-sm-6 p-5"><CartItem /></div>
          <div className=" col-lg-4 col-md-4  col-sm-6 p-5"> <CartItem /> </div>
          <div className="col-lg-4 col-md-4  col-sm-6 p-5"> <CartItem /> </div>
        </div>
        <div className='m-5 d-lg-flex flex-lg-row   d-md-flex flex-md-row  d-sm-flex flex-sm-column p-5 border border-2 border-dark'>
           <p className='m-0 fw-medium  fs-5'>Total Price: $4999</p>
           <div className='ms-auto'>
           <button className='btn fw-semibold  btn-outline-dark'>Checkout</button>
          </div>
        </div>
      </div>
      </>
    
  )
}

export default Cart