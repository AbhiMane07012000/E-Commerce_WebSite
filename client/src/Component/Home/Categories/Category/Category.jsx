import React from "react";

const Category = (props) => {
  return (
    <>
      <div className="card bg-info bg-opacity-25 ">
        
        
        <img src={props.img} className=" card-img-top" alt="CategoryImg" />
      
      </div>
    </>
  );
};

export default Category;
