import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  products: [],
  product: [],
  cartItems: [],
  SubTotal: [],
  isLogin : false
};

const shopifySlice = createSlice({
  name: "shopify",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setCartItems: (state, action) => {
      const Product = state.cartItems.find(
        (cartItem) =>
          cartItem.product.data[0].id === action.payload.product.data[0].id
      );
      if (!Product) {
        state.cartItems.push(action.payload);
      } else {
        Product.Quantity = Product.Quantity + action.payload.Quantity;
      }
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem?.product?.data?.[0]?.id !== action.payload
      );
    },
    setIncrementQuantity: (state, action) => {
      const Product = state.cartItems.find(
        (cartItem) => cartItem.product.data[0].id === action.payload
      );

      Product.Quantity = Product.Quantity + 1;
    },
    setDecrementQuantity: (state, action) => {
      const Product = state.cartItems.find(
        (cartItem) => cartItem.product.data[0].id === action.payload
      );

      Product.Quantity = Product.Quantity - 1;
    },
    getSubTotalPrice: (state, action) => {
      let sum = 0;
      state.SubTotal = state.cartItems.map((cartItem) => {
        return (
          cartItem?.product?.data?.[0]?.attributes?.price * cartItem.Quantity
        );
      });
      state.SubTotal.forEach((price) => {
        sum += price;
      });
      state.SubTotal = sum;
    },
    setIsLogin : (state,action) =>{
      state.isLogin=false
    },
   
  },
});

export const {
  setCategories,
  setProducts,
  setProduct,
  setCartItems,
  removeCartItem,
  setIncrementQuantity,
  setDecrementQuantity,
  getSubTotalPrice,
  setIsLogin
} = shopifySlice.actions;
export default shopifySlice.reducer;
