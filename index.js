import { createStore } from "redux";
const CAKE_ORDERED = "sfgsdg";

// Action
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

const initialState = {
  numOfCakes: 10,
  anotherThings: 0,
};
// reducers : (prevState, action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      state;
  }
};

const store = createStore(reducer);
console.log("Initial State ", store.getState());

const unsubcribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
unsubcribe();
