import React from "react";
import './Category.css'
const Category = (props) => {
  return (
    <>
      <div   className="card bg-info bg-opacity-25 ">
        <img
          src={props.img && props.img}
          className=" category-img card-img-top"
          alt="CategoryImg"
        />
      </div>
    </>
  );
};

export default Category;
