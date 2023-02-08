import { configureStore } from "@reduxjs/toolkit";
import RootReducer from './slice'

const store = configureStore({
  reducer: { RootReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;