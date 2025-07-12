import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    data: null
}

export const getProduct = createAsyncThunk('productSlice/getProduct', async(info) => {
    let { data } = await axios.get(`https://dummyjson.com/products/search?q=${info}`)
    return data.products
})


const productSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {

    },
    extraReducers:(builder) => {
     builder.addCase(getProduct.fulfilled, (state,action) => {
         state.data = action.payload
     })
    }
})

export default productSlice.reducer