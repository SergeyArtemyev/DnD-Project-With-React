import React, { useReducer } from "react";
import { GET_RACE, GET_RACIAL_TRAITS, PUSH_LANGUAGE } from "../../types";
import RaceContext from "./raceContext";
import RaceReducer from "./raceReducer";
import axios from "axios";

const RaceState = (props) => {
  const initialState = {
    race: null,
    racialTraits: {},
  };

  const [state, dispatch] = useReducer(RaceReducer, initialState);

  // Get race and racial traits
  const getRace = async (race) => {
    const res = await axios.get("db.json");
    dispatch({
      type: GET_RACE,
      payload: race,
    });
    dispatch({
      type: GET_RACIAL_TRAITS,
      payload: res.data[`${race}`],
    });
  };

  // Push language to userDb
  // Doesn't work. needs to check
  // I NEED TO INSTAL JSON SERVER
  const pushLanguage = async (language) => {
    // const config = {
    //   headers: {
    //     "Content-Type": "Application/json",
    //   },
    // };
    try {
      // const res = await axios.post("db.json", language, config);
      const res = await axios.post({
        method: "POST",
        url: "/userDb.json",
        data: language,
      });

      dispatch({
        type: PUSH_LANGUAGE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <RaceContext.Provider
      value={{
        race: state.race,
        racialTraits: state.racialTraits,
        getRace,
        pushLanguage,
      }}
    >
      {props.children}
    </RaceContext.Provider>
  );
};

export default RaceState;
