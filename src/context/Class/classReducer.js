import { GET_CLASS, GET_CLASS_FEATURES, GET_DESCRIPTION } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_CLASS:
      return {
        ...state,
        className: action.payload,
      };
    case GET_CLASS_FEATURES:
      return {
        ...state,
        classFeatures: action.payload === undefined ? state.classFeatures : action.payload,
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
