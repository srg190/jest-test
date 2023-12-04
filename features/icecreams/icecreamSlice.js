import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIceCream: 10,
};

const icecreamSlice = createSlice({
  name: "ice-cream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--;
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },
});
const { ordered, restocked } = icecreamSlice.actions;

export const icecreamActions = {
  ordered,
  restocked,
};

export default icecreamSlice.reducer;
