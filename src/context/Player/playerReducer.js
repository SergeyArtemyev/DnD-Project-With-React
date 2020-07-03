import { GET_CHAR_DATA, DELETE_CHAR } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_CHAR_DATA:
      return {
        ...state,
        playerData: action.payload,
      };
    case DELETE_CHAR:
      return {
        ...state,
        playerData: {},
      };
    default:
      return state;
  }
};
