import types from "./types";

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  isError: false,
  isReset: false,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
        isLoading: false,
        isError: false,
      };
    case types.FETCH_USERS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.RESET_USERS:
      return {
        ...state,
        users: [],
        isLoading: false,
        isError: false,
      };
    case types.ADD_USER:
      return {
        ...state,
        users: [...state.users,...action.payload],
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
