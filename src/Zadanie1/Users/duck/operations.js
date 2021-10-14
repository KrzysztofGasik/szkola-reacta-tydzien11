import actions from "./actions";

export const fetchUsers = (numberOfUserToFetch = 10,typeOfAction) => {
  return function (dispatch) {
    dispatch(actions.fetchRequest());
    fetch(`https://randomuser.me/api/?results=${numberOfUserToFetch}`)
      .then((response) => response.json())
      .then((data) => {
        if (typeOfAction === "fetch") dispatch(actions.fetchSuccess(data.results));
        if (typeOfAction === "add") dispatch(actions.addUser(data.results));
      })
      .catch((error) => dispatch(actions.fetchFailed()));
  };
};
