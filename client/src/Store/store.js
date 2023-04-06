import { configureStore } from '@reduxjs/toolkit'
import shopifyReducer from './shopifySlice';

const store = configureStore({
  reducer: {
    shopify:shopifyReducer
  },
})

export default store;