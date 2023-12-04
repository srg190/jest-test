import { createStore } from "redux";

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

const store = createStore(reducer);
