import React, { useReducer } from "react";
import { ADD_PLAYER } from "../../types";
import PlayerContext from "./playerContext";
import PlayerReducer from "./playerReducer";
import axios from "axios";

const PlayerState = (props) => {
  const initialState = {
    data: null,
  };

  const [state, dispatch] = useReducer(PlayerReducer, initialState);

  // Get race and racial traits
  const addPlayer = async (playerdata) => {
    const config = {
      headers: {
        "Content-Type": "Application/json",
      },
    };
    const res = await axios.post("http://localhost:5000/player", playerdata, config);
  };

  return (
    <PlayerContext.Provider
      value={{
        data: state.data,
        addPlayer,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerState;
