import types from "./types";

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  isError: false,
  isReset: false,
  isAdded: false,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isReset: false,
        isAdded: false,
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
        // users: [...action.payload],
        isLoading: false,
        isError: false,
        isReset: false,
        isAdded: false,
      };
    case types.FETCH_USERS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isReset: false,
        isAdded: false,
      };
    case types.RESET_USERS:
      return {
        ...state,
        users: [],
        isLoading: false,
        isError: false,
        isReset: true,
        isAdded: false,
      };
    case types.ADD_USER:
      return {
        ...state,
        users: [...state.users, ...action.payload],
        isLoading: false,
        isError: false,
        isReset: false,
        isAdded: true,
      };
    default:
      return state;
  }
};

export default usersReducer;
