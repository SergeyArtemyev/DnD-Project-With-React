import { GET_RACE, GET_RACIAL_TRAITS, GET_DESCRIPTION } from "../../types";

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
    case GET_DESCRIPTION:
      return {
        ...state,
        description: action.payload === undefined ? state.description : action.payload,
      };
    default:
      return state;
  }
};
