import types from "./types";

export const fetchRequest = () => ({
  type: types.FETCH_USERS_REQUEST,
});

export const fetchSuccess = (data) => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: data,
});

export const fetchFailed = () => ({
  type: types.FETCH_USERS_FAILED,
});

export const resetUsers = () => ({
  type: types.RESET_USERS,
});
export const addUser = (data) => ({
  type: types.ADD_USER,
  payload: data,
});

export default {
  fetchRequest,
  fetchSuccess,
  fetchFailed,
  resetUsers,
  addUser
};
