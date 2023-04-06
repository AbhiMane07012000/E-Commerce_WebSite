import React,{useCallback,useEffect}from "react";
import Products from "../Home/Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import {  useDispatch ,useSelector} from "react-redux";
import {  setProducts } from "../../Store/shopifySlice";
import { useParams } from "react-router-dom";
 

const Category = () => {

  const dispatch = useDispatch();
  const allproduct = useSelector((state) => state.shopify.products);
  const {id} =useParams();

  const getCategoriesWiseData = useCallback( async () => {
    try {
      const data = await fetchDataFromApi(`/api/products?populate=*&[filters][categories][id]=${id}`);

      dispatch(setProducts(data))
    } catch (err) {
      console.log(err);
      return err;
    }
  },[dispatch,id])


  useEffect(() => {
    getCategoriesWiseData();
  }, [getCategoriesWiseData]);


  return (
    <div className="px-5 py-5 container">
      <p className=" h3 fw-semibold">
        <u>{allproduct?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</u>
      </p>
      <Products innerPage="true" allproduct={allproduct} />
    </div>
  );
};

export default Category;
