import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./features/cake/cakeSlice.js";
import icecreamReducer from "./features/icecreams/icecreamSlice.js";
import log from "redux-logger";
import userReducer from "./features/user/userSlice.js";

const logger = log.createLogger({});
export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecreame: icecreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddileware) => getDefaultMiddileware().concat(logger),
});
