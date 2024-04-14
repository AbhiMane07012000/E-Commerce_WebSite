import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem/CartItem";
import { getSubTotalPrice } from "../../Store/shopifySlice";
import EmptyCart from "./EmptyCart/EmptyCart";
import Logo from "../../Assets/bag.png"
import { makePaymentRequest } from "../../utils/api";
import { useNavigate } from "react-router-dom";




const Cart = () => {
  const cartItems = useSelector((state) => state.shopify.cartItems);

  const subTotal = useSelector((state) => state.shopify.SubTotal);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSubTotalPrice());
  });

  const razorPayment = async (e) =>{
    e.preventDefault()
    const res = await makePaymentRequest.post("/api/orders", {
      products:[],
      subTotal,
      order_id:0
    });

    
    var options = {
      "key": 'rzp_test_hmpCyJujXuI4pG', // Enter the Key ID generated from the Dashboard
      "amount": (res.data.amount) , // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Shopify", //your business name
      "image":Logo,
      "description": "Test Transaction",
      "order_id": res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": async function (response){
        console.log(response.razorpay_payment_id);
        console.log(response.razorpay_order_id);
        console.log(response.razorpay_signature);
        const res = await makePaymentRequest.post("/api/orders", {
          products: cartItems,
          subTotal,
          order_id:response.razorpay_order_id
        });
        if(res.status)
          navigate('/success')
      
    },
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
          "name": "Abhijeet Mane", //your customer's name
          "email": "abhijeet.mane@example.com", 
          "contact": "7888003777"  //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };

  var rzp1 = new window.Razorpay(options);
  rzp1.on('payment.failed', function (response){
        console.log(response.error.code);
        console.log(response.error.description);
        console.log(response.error.source);
        console.log(response.error.step);
        console.log(response.error.reason);
        console.log(response.error.metadata.order_id);
        console.log(response.error.metadata.payment_id);
        navigate('/failed')
});
rzp1.open();
  }




 

  return (
    <>
      <p
        className="fs-2 fw-semibold  ps-5 pt-5 "
        style={cartItems.length === 0 ? { display: "none" } : {}}
      >
        <u>Cart</u>
      </p>
      <div className="container-fluid p-5 ">
        <div className="row ">
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            cartItems.map((cartItem) => (
              <div className="col-lg-6">
                <CartItem
                  key={cartItem?.product.data?.[0]?.id}
                  id={cartItem?.product.data?.[0]?.id}
                  prodtIMG={
                    process.env.REACT_APP_STRIPE_APP_DEV_URL +
                    cartItem?.product.data?.[0]?.attributes?.img?.data?.[0]
                      ?.attributes?.url
                  }
                  prodTitle={cartItem?.product.data?.[0]?.attributes?.title}
                  prodPrice={cartItem?.product.data?.[0]?.attributes?.price}
                  prodQuantity={cartItem?.Quantity}
                  prodTotalPrice={
                    cartItem?.Quantity *
                    cartItem?.product.data?.[0]?.attributes?.price
                  }
                />
              </div>
            ))
          )}
        </div>

        <form
          className="card border border-2 border-dark text-center mt-3 mb-3"
          style={cartItems.length === 0 ? { display: "none" } : {}}
        >
          <div className="card-body">
            <p className="card-text   fw-bold m-0">
              Sub Total : {!subTotal ? 0 : subTotal}
            </p>
            <button
              onClick={razorPayment}
              className="btn btn-outline-dark fw-bold"
            >
              Razpay
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Cart;
