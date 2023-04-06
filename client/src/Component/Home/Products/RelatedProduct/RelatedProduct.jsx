import React,{useCallback,useEffect} from "react";
import Products from "../Products";
import { fetchDataFromApi } from "../../../../utils/api";
import {  useDispatch ,useSelector} from "react-redux";
import {  setProducts } from "../../../../Store/shopifySlice";


const RelatedProduct = (props) => {

  // 
  const dispatch = useDispatch();
  const allproduct = useSelector((state) => state.shopify.products);

  const getCategoriesWiseData = useCallback( async () => {
    try {
      const data = await fetchDataFromApi(`/api/products?populate=*&filters[id][$ne]=${props.productId}&filters[categories][id]=${props.categoryId}&pagination[start]=0&pagination[limit]=4`);

      dispatch(setProducts(data))
    } catch (err) {
      console.log(err);
      return err;
    }
  },[dispatch,props])


  useEffect(() => {
    getCategoriesWiseData();
  }, [getCategoriesWiseData]);


  return (
    <div className="px-5">
      <Products headingText="Related Products" allproduct={allproduct} />
    </div>
  );
};

export default RelatedProduct;
