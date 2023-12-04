import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./features/cake/cakeSlice.js";
import icecreamReducer from "./features/icecreams/icecreamSlice.js";

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecreame: icecreamReducer,
  },
});
