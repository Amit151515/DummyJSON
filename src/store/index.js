import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './products/productsSlice'
import productSlice from './products/ProductSlice'

export const store = configureStore({
    reducer: {
        products: productsSlice,
        product: productSlice
    }
})