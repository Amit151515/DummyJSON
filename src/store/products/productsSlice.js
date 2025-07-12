import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    data: null
}

export const getProducts = createAsyncThunk('productsSlice/getProducts', async(skip) => {
    let { data } = await axios.get(`https://dummyjson.com/products?limit=12&skip=${skip}&select=title,price,description,discountPercentage,stock,thumbnail`)
    return data.products
})


const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {

    },
    extraReducers:(builder) => {
     builder.addCase(getProducts.fulfilled, (state,action) => {
         state.data = action.payload
     })
    }
})

export default productsSlice.reducer