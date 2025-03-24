import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";
const store = configureStore({
  reducer: {
    booksAuth: booksReducer,
  },
});

export default store;
