import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./About.css";

const About = () => {
  return (
    <React.Fragment>
      <div className="container-fluid about">
        <div className="p-5 row">
          <div className="col col-lg-6 col-md-12 col-sm-12">
            <h4>Address</h4>
            <div className="py-2 d-flex d-xxl-flex flex-row">
              <LocationOnIcon />
              <p className="ps-3">Old Sanghvi, Pune-411027</p>
            </div>
            <iframe
              className="w-75 map"
              title="Old Sanghvi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.139499209416!2d73.81004567056763!3d18.5724663883637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf4aab3ecf61%3A0x1c28cc07831147dc!2sOld%20Sangvi%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1679398350345!5m2!1sen!2sin"
            />
            <div className="w-100 pt-5">
              <h4>Contact</h4>
              <div className="py-2 d-flex d-xxl-flex flex-row">
                <LocalPhoneIcon /> <p className="ps-4">+91889999558742</p>
              </div>
              <div className="py-2 d-flex d-xxl-flex flex-row">
                <EmailIcon /> <p className="ps-4">shopify_example@email.com</p>
              </div>
            </div>
          </div>
          <div className=" col col-lg-6 col-md-12 col-sm-12">
            <h4>Enquiry</h4>
            <form >
              <label for="fullName" class="pt-3 form-label">
                Full Name
              </label>
              <input
                type="text"
                class="border-2 border-dark form-control"
                id="fullName"
                placeholder="John Wick"
              />
              <label for="email" class="pt-3 form-label">
                Email address
              </label>
              <input
                type="email"
                class="border-2 border-dark form-control"
                id="email"
                placeholder="name@example.com"
              />
              <label for="text-area" class="pt-3 form-label">
                Message
              </label>
              <textarea
                class="border-2 border-dark form-control"
                placeholder="Type some message Here..."
                id="text-area"
                rows="3"
              ></textarea>
              <button  type="submit" class=" mt-3 btn btn-outline-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
