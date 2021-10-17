import types from "./types";

const INITIAL_STATE = {
  messages: [{ type: "", text: "" }],
};

const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOW_MESSAGE:
      return {
        ...state,
        messages: [action.payload],
      };

    default:
      return state;
  }
};

export default messageReducer;
