import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./products/productslice";
import cartReducer from "./Cart/cartSlice";

const store=configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer,
    },
});

export default store;