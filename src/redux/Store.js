import { configureStore } from "@reduxjs/toolkit";
import  Creducer  from "./features/counter";
export const store = configureStore({
    reducer:{
    counter:Creducer
    }
})