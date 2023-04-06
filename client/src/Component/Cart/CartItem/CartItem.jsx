import React from "react";
import {removeCartItem,setIncrementQuantity,setDecrementQuantity} from "../../../Store/shopifySlice"
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'

const CartItem = (props) => {

  
  const dispatch= useDispatch();
  const navigate = useNavigate();

  const removeItem = () =>{
    dispatch(removeCartItem(props.id))
  }

  const increment = () =>{
    dispatch(setIncrementQuantity(props.id))
  }

  const decrement = () =>{
    if(props.prodQuantity>1) dispatch(setDecrementQuantity(props.id))
  }

  return (
    <div className="card mb-3" >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={props.prodtIMG}
            className="img-fluid bg-primary-subtle rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body p-4">
            <button
              type="button"
              className="position-absolute top-0 end-0 btn-close p-2"
              onClick={removeItem}
            ></button>
            <h5 className="card-title fs-5 text-truncate  fw-semibold" onClick={() => navigate(`/product/${props.id}`)}>
              {props.prodTitle}
            </h5>
            <p className="card-text fs-6 fw-semibold">₹ {props.prodPrice}</p>
           
              <form className="row d-lg-flex flex-lg-row flex-md-row flex-sm-column text-center">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className=" btn-group" role="group">
                    <button
                      type="button"
                      className="btn btn-outline-dark fw-bold"
                      onClick={decrement}
                    >
                      -
                    </button>
                    <input
                      value={props.prodQuantity}
                      className="form-control border border-start-0 border-end-0 border-1 border-dark rounded-0 text-center fw-bold"
                      type="number"
                      readOnly
                    />
                    <button
                      type="button"
                      className="btn btn-outline-dark fw-bold"
                      onClick={increment}
                    >
                      +
                    </button>
                  </div>
                </div>
              </form>
            <p className="card-text pt-3 fs-6 fw-semibold">
              ₹ {props.prodTotalPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
