import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState ={
    products:[],
    isLoading:false,
    isError:false,
    isSuccess:false,

}
const productslice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchproducts.pending, (state)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchproducts.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.products=action.payload;
        });
        builder.addCase(fetchproducts.rejected, (state)=>{
            state.isLoading=false;
            state.isSuccess=false ;  
            state.isError=true;
            state.products=null;
        });
    },
});


export default productslice.reducer;

 export const fetchproducts = createAsyncThunk("FETCH_PRODUCTS", async()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
});