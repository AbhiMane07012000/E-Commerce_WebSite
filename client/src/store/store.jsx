import { configureStore } from '@reduxjs/toolkit'
import shopifyReducer from './slices/shopifySlice'

const store =configureStore({
    reducer:{
        shopify:shopifyReducer
    }
})

export default store;
