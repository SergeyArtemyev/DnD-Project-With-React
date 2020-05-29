import { GET_BACKGROUND, GET_DESCRIPTION, GET_AVATAR } from "../../types";

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
    case GET_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };
    default:
      return state;
  }
};
