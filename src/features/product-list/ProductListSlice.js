import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};



export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
    },
});