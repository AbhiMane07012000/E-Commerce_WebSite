import React from 'react'
import EmptycartImg from '../../../Assets/emptycart.png'

const EmptyCart = () => {
  return (
    <div className='text-center mb-5'  >
        <img src={EmptycartImg} alt="emptyCart" />
        <p className='fs-3 fw-bolder'>Hey, It feels so light! </p>
        <p className='fw-medium text-secondary'>There is nothing in your cart, Let's buy some items.</p>
    </div>
  )
}

export default EmptyCart