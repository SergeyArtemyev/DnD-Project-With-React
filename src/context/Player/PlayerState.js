import React, { useReducer } from "react";
import PlayerContext from "./playerContext";
import PlayerReducer from "./playerReducer";
import { GET_CHAR_DATA } from "../../types";
import axios from "axios";

const PlayerState = (props) => {
  const initialState = {
    playerData: {},
  };

  const [state, dispatch] = useReducer(PlayerReducer, initialState);
  // Add all farm data to data base
  const addPlayer = async (playerdata) => {
    const config = {
      headers: {
        "Content-Type": "Application/json",
      },
    };
    await axios.post("http://localhost:5000/player", playerdata, config);
  };

  const getCharData = async () => {
    const res = await axios.get("http://localhost:5000/player/1");
    dispatch({
      type: GET_CHAR_DATA,
      payload: res.data,
    });
  };

  return (
    <PlayerContext.Provider
      value={{
        playerData: state.playerData,
        addPlayer,
        getCharData,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerState;
