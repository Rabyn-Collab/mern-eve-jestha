import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../pages/users/userSlice.js";
import { blogApi } from "../pages/blogs/blogApi.js";



const nim = {
  name: 'ram'
};

console.log({ [nim.ram]: 'shyam' })



export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    [blogApi.reducerPath]: blogApi.reducer

  }
});