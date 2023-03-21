import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <React.Fragment>
      <div className="container-fluid text-center newsletter">
        <div className="row">
          <div className="col">
            <p className="newsletter-heading">Newsletter</p>
            <p className="newsletter-p">Sign up for Latest Upadates & Offers</p>
            <div className="form">
              <input
                type="email"
                className="form-control  newsletter-input"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
              <button type="submit" className="m-2 newsletter-button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Newsletter;
