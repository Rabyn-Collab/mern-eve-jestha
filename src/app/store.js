import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../pages/users/userSlice.js";






export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer
  }

});