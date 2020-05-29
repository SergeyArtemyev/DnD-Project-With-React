import { ADD_PLAYER } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        isCreated: action.payload,
      };
    default:
      return state;
  }
};
