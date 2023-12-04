import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import axios from "axios";
const initialState = {
  loading: false,
  data: [],
  error: "",
};

const FETCH_USERS_REQUESTED = "kajwtbb7";
const FETCH_USERS_SUCCEEDED = "sdfg23";
const FETCH_USERS_FAILED = "sortu3";

const fetchUsersRequested = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUsersSucceeded = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUsersFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersRequested());
  await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      const users = res.data.map((user) => user.id);
      dispatch(fetchUsersSucceeded(users));
    })
    .catch((err) => dispatch(fetchUsersFailed(err.message)));
};
const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());
