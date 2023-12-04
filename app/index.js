import { store } from "../store.js";
import { ordered, restocked } from "../features/cake/cakeSlice.js";
import { icecreamActions } from "../features/icecreams/icecreamSlice.js";
import { fetchUsers } from "../features/user/userSlice.js";

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(fetchUsers());
// store.dispatch(ordered());
// store.dispatch(ordered());
// store.dispatch(ordered());
// store.dispatch(restocked(3));
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(10));
unsubscribe();
