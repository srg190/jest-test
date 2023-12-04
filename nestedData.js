import { createStore } from "redux";
import { produce } from "immer";
const intialState = {
  name: "Elon Musk",
  address: {
    street: "Xai12",
    planet: "Mars",
    countery: "Alpha-X",
  },
};

const STREET_UPDATED = "sdfhvg8";

const updateStreet = (street) => {
  return { type: STREET_UPDATED, payload: street };
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};
const store = createStore(reducer);
// it will become huge problem when we have nested data, its become tough to maintain it
// so using immer
console.log(store.getState());
store.dispatch(updateStreet("Centauri"));
console.log(store.getState());
