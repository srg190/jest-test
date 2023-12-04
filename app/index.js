import { store } from "../store.js";
import { ordered, restocked } from "../features/cake/cakeSlice.js";
import { icecreamActions } from "../features/icecreams/icecreamSlice.js";

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(ordered());
// store.dispatch(ordered());
// store.dispatch(ordered());
// store.dispatch(restocked(3));
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(10));
unsubscribe();
