import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slice/apiSlice";
import basketSlice from "./slice/basketSlice";


const store=configureStore({
    reducer:({
       api:apiSlice ,
       basket:basketSlice
    })
})
export default store