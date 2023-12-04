import { createStore, bindActionCreators, combineReducers } from "redux";
const CAKE_ORDERED = "sfgsdg";
const CAKE_RESTOCKED = "sfgsdf";
const ICECREAM_ORDERED = "cfjnv";
const ICECREAM_RESTOCKED = "sljdfhn";
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

function iceCreamOrdered(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function iceCreamRestocked(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

const cakeInitialState = {
  numOfCakes: 10,
  anotherThings: 0,
};
const iceCreamInitialState = {
  numOfIceCream: 10,
  anotherThings: 0,
};
// reducers : (prevState, action) => newState
const cakeReducer = (state = cakeInitialState, action) => {
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
      return state;
  }
};

const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
      };

    default:
      return state;
  }
};

// both above reducers will  work independently
const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
// store only accept one reducer
const store = createStore(rootReducers);
console.log("Initial State ", store.getState());

const unsubcribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(cakeRestocked(3));

// we can bind the actions
const action = bindActionCreators(
  { orderCake, cakeRestocked, iceCreamOrdered, iceCreamRestocked },
  store.dispatch
);
action.orderCake();
action.orderCake();
action.orderCake();
action.iceCreamOrdered(2);
action.iceCreamRestocked(5);
action.cakeRestocked(3);

unsubcribe();
console.log(store.getState().iceCream.numOfIceCream);
