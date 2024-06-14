import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../../slices/AuthSlice";
// import { apiSlice } from "../../slices/apiSlice";
import authReducer from "../features/auth/authSlice";
import sellersSlice from "../features/sellers/sellersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sellers: sellersSlice,
    // [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // middleware: (getDefaltMiddleware) =>
  //   getDefaltMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
