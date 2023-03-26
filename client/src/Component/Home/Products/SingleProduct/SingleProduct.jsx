import React from "react";
import RelatedProduct from "../RelatedProduct/RelatedProduct";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


import ProductImg from "../../../../Assets/products/earbuds-prod-2.webp";

import WhatsAppIcon from "../../../../Assets/social/whatsapp.png";

const SingleProduct = () => {
  return (
    <div className="container-fluid ">
      <div className="row d-lg-flex flex-lg-row flex-md-column flex-sm-row p-5">
        <div className=" bg-light-subtle col-lg-6 col-md-12 col-sm-12">
          <img className="w-100" src={ProductImg} alt="" />
        </div>
        <div className="py-5 px-1 col-lg-6 col-md-12 col-sm-12">
          <p className="h3">
            <strong>Product Title</strong>
          </p>
          <p className="h5">
            <strong>Product Price</strong>
          </p>

          <p className="h6">
            Product dtls Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Leo vel orci porta non pulvinar neque laoreet. Sem integer
            vitae justo eget magna fermentum. Facilisis sed odio morbi quis
            commodo. Ac tortor dignissim convallis aenean et tortor at risus
            viverra. Id consectetur purus ut faucibus pulvinar elementum integer
            enim neque. Sit amet justo donec enim diam vulputate ut. In egestas
            erat imperdiet sed. Consequat nisl vel pretium lectus quam id leo.
            Tortor at risus viverra adipiscing at in tellus. Tincidunt eget
            nullam non nisi. Elementum eu facilisis sed odio. Sed elementum
            tempus egestas sed sed risus pretium quam. Sed tempus urna et
            pharetra pharetra massa massa ultricies mi.
          </p>

          <form className="row d-lg-flex flex-lg-row flex-md-row flex-sm-column text-center py-2">
            <div className="col-lg-6 col-md-6 col-sm-12 py-1 ">
              <div className="w-75 btn-group" role="group">
                <button type="button" className="btn btn-outline-dark fw-bold">
                  -
                </button>
                <input
                  className="form-control w-50 border border-start-0 border-end-0 border-1 border-dark rounded-0 text-center fw-bold"
                  type="number"
                />
                <button type="button" className="btn btn-outline-dark fw-bold">
                  +
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 pt-1">
              <button
                type="submit"
                className="w-75  btn btn-outline-dark fw-bold"
              >
               Add to Cart  {<AddShoppingCartIcon />}
              </button>
            </div>
          </form>

          <p className="h6 fw-semibold pt-4 ">Share :</p>
            <div className="p-1">
              <img  src={WhatsAppIcon} alt="whatsappIcon" />
            </div>
            
        </div>
      </div>
      <RelatedProduct  />
    </div>
  );
};

export default SingleProduct;
