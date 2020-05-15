import { GET_BACKGROUND, GET_DESCRIPTION } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_BACKGROUND:
      return {
        ...state,
        background: action.payload,
      };
    case GET_DESCRIPTION:
      return {
        ...state,
        description: action.payload === undefined ? state.description : action.payload,
      };
    default:
      return state;
  }
};
