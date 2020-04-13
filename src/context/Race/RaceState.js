import React, { useReducer } from "react";
import { GET_RACE, GET_RACIAL_TRAITS, GET_DESCRIPTION } from "../../types";
import RaceContext from "./raceContext";
import RaceReducer from "./raceReducer";
import axios from "axios";

const RaceState = (props) => {
  const initialState = {
    race: null,
    racialTraits: {},
    description: {},
  };

  const [state, dispatch] = useReducer(RaceReducer, initialState);

  // Get race and racial traits
  const getRace = async (race) => {
    const res = await axios.get(`http://localhost:5000/races/${race}`);
    dispatch({
      type: GET_RACE,
      payload: race,
    });
    dispatch({
      type: GET_RACIAL_TRAITS,
      payload: res.data["racial traits"],
    });
    dispatch({
      type: GET_DESCRIPTION,
      payload: res.data.description,
    });
  };

  return (
    <RaceContext.Provider
      value={{
        race: state.race,
        racialTraits: state.racialTraits,
        description: state.description,
        getRace,
      }}
    >
      {props.children}
    </RaceContext.Provider>
  );
};

export default RaceState;
