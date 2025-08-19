import { configureStore } from "@reduxjs/toolkit";
import { drinkApi } from "../pages/drinks/drinkApi.js";





export const store = configureStore({
  reducer: {
    [drinkApi.reducerPath]: drinkApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      drinkApi.middleware
    ]),
});