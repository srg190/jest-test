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
  extraReducers: (builder) => {
    builder.addCase("cake/ordered", (state) => {
      state.numOfIceCream--;
    });
  },
  //   extraReducers: (builder) => {
  //     builder.addCase('we can directly pass the action', (state) => {
  //       state.numOfIceCream--;
  //     });
  //   },
});
const { ordered, restocked } = icecreamSlice.actions;

export const icecreamActions = {
  ordered,
  restocked,
};

export default icecreamSlice.reducer;
