import { createStore, bindActionCreators } from "redux";
const CAKE_ORDERED = "sfgsdg";
const CAKE_RESTOCKED = "sfgsdf";
// Action
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function cakeRestocked(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
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
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
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
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(cakeRestocked(3));

// we can bind the actions
const action = bindActionCreators({ orderCake, cakeRestocked }, store.dispatch);
action.orderCake();
action.orderCake();
action.orderCake();
action.cakeRestocked(3);

unsubcribe();
