import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories:[],
}

export const  shopifySlice = createSlice({
    name:'shopify',
    initialState,
    reducers:{
        setCategory : (state,action) =>{
            console.log(action.payload)
            state.categories=action.payload
        }
    }
})

export  const  {setCategory} = shopifySlice.actions;
export default shopifySlice.reducer;