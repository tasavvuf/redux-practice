import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchslice";

export const store = configureStore({
  reducer: {
    searchslice: searchReducer
  }
});