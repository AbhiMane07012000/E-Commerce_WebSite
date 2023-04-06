import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem/CartItem";
import { getSubTotalPrice } from "../../Store/shopifySlice";
import EmptyCart from "./EmptyCart/EmptyCart";
import GooglePayButton from "@google-pay/button-react";


const Cart = () => {
  const cartItems = useSelector((state) => state.shopify.cartItems);

  const subTotal = useSelector((state) => state.shopify.SubTotal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubTotalPrice());
  });

 

  

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


                
        <form className="card border border-2 border-dark text-center mt-3 mb-3" style={cartItems.length === 0 ? { display: "none" } : {}} >
          <div className="card-body">
            <p className="card-text   fw-bold m-0">
              Sub Total : {!subTotal ? 0 : subTotal}
            </p>    
            <GooglePayButton
              
              environment="TEST"
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type: "CARD",
                    parameters: {
                      allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                      allowedCardNetworks: ["MASTERCARD", "VISA"],
                      billingAddressRequired:true
                    },
                    tokenizationSpecification: {
                      type: "PAYMENT_GATEWAY",
                      parameters: {
                        gateway: "example",
                        gatewayMerchantId: "exampleGatewayMerchantId",
                      },
                    },
                  },
                ],
                merchantInfo: {
                  merchantId: "12345678901234567890",
                  merchantName: "Demo Merchant",
                },
                transactionInfo: {
                  totalPriceStatus: "FINAL",
                  totalPriceLabel: "Total",
                  totalPrice: `${subTotal}`,
                  currencyCode: "INR",
                  countryCode: "IN",
                },
                shippingAddressRequired:true,
                shippingAddressParameters:{
                  allowedCountryCodes : ["IN"],
                  phoneNumberRequired:true
                },
                callbackIntents:["PAYMENT_AUTHORIZATION"]
                
              }}
              onLoadPaymentData={(paymentRequest) => {
                console.log(
                  "load payment data",
                  paymentRequest
                );
                console.log("done");
              }}
              onPaymentAuthorized={paymentData =>{
                console.log(paymentData);
                return{transactionState:'SUCCESS'}
              }}
              existingPaymentMethodRequired='false'
              buttonType="checkout"
            />
          </div>
        </form>
        
      </div>
    </>
  );
};

export default Cart;
