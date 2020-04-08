import { GET_RACE, GET_RACIAL_TRAITS, PUSH_LANGUAGE } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_RACE:
      return {
        ...state,
        race: action.payload,
      };
    case GET_RACIAL_TRAITS:
      return {
        ...state,
        racialTraits: action.payload === undefined ? state.racialTraits : action.payload,
      };
    case PUSH_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};
