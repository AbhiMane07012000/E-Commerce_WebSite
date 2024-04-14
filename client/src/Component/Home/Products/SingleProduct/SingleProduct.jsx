import React, { useCallback, useEffect, useState } from "react";
import RelatedProduct from "../RelatedProduct/RelatedProduct";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import WhatsAppIcon from "../../../../Assets/social/whatsapp.png";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { setProduct,setCartItems } from "../../../../Store/shopifySlice";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
  let [Quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.shopify.product);
  // const isLogin = useSelector((state) => state.shopify.isLogin);
  const { id } = useParams();

  

  const getProductData = useCallback(async () => {
    try {
      const data = await fetchDataFromApi(
        `/api/products?populate=*&[filters][id]=${id}`
      );

      dispatch(setProduct(data));
    } catch (err) {
      console.log(err);
      return err;
    }
  }, [dispatch, id]);

  useEffect(() => {
    getProductData();
  }, [getProductData]);

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decrement = () => {
    setQuantity((prevState) => {
      if(prevState===1) return 1
      return prevState -1
    });
  };


  const validate =(e)=>{
      e.preventDefault();
    dispatch( setCartItems({product,Quantity}));
    setTimeout(() => {
      setQuantity(1)
    }, "1000");
  }

  return (
    <div className="container-fluid ">
      <div className="row d-lg-flex flex-lg-row flex-md-column flex-sm-row p-5">
        <div className=" bg-light-subtle col-lg-6 col-md-12 col-sm-12">
          <img
            className="w-100"
            src={
              process.env.REACT_APP_STRIPE_APP_DEV_URL +
              product?.data?.[0]?.attributes?.img?.data?.[0]?.attributes?.url
            }
            alt=""
          />
        </div>
        <div className="py-5 px-1 col-lg-6 col-md-12 col-sm-12">
          <p className="h3">
            <strong>{product?.data?.[0]?.attributes?.title}</strong>
          </p>
          <p className="h5">
            <strong>₹{product?.data?.[0]?.attributes?.price}</strong>
          </p>

          <p className="h6">{product?.data?.[0]?.attributes?.desc}</p>

          <form className="row d-lg-flex flex-lg-row flex-md-row flex-sm-column text-center py-2" onSubmit={validate}>
            <div className="col-lg-6 col-md-6 col-sm-12 py-1 ">
              <div className="w-75 btn-group" role="group">
                <button
                  type="button"
                  className="btn btn-outline-dark fw-bold"
                  onClick={decrement}
                >
                  -
                </button>
                <input
                  value={Quantity}
                  className="form-control w-50 border border-start-0 border-end-0 border-1 border-dark rounded-0 text-center fw-bold"
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
            <div className="col-lg-6 col-md-6 col-sm-12 pt-1">
              <button 
                type="submit"
                className="w-75  btn btn-outline-dark fw-bold"
              >
                Add to Cart {<AddShoppingCartIcon />}
              </button>
            </div>
          </form>

          <p className="h6 fw-semibold pt-4 ">Share :</p>
          <div className="p-1">
            <img src={WhatsAppIcon} alt="whatsappIcon" />
          </div>
        </div>
      </div>
      <RelatedProduct productId={product?.data?.[0]?.id} categoryId={product?.data?.[0]?.attributes?.categories?.data?.[0].id} />
    </div>
  );
};

export default SingleProduct;
