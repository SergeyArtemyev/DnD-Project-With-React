import { ADD_PLAYER, GET_CHAR_DATA } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        isCreated: action.payload,
      };
    case GET_CHAR_DATA:
      return {
        ...state,
        playerData: action.payload,
      };
    default:
      return state;
  }
};
