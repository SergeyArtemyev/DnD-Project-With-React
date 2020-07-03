import React, { useReducer } from "react";
import PlayerContext from "./playerContext";
import PlayerReducer from "./playerReducer";
import { GET_CHAR_DATA, DELETE_CHAR } from "../../types";
import axios from "axios";

const PlayerState = (props) => {
  const initialState = {
    playerData: {},
  };

  const [state, dispatch] = useReducer(PlayerReducer, initialState);
  // Add all form data to data base
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

  const deleteChar = async () => {
    await axios.delete("http://localhost:5000/player/1");
    dispatch({ type: DELETE_CHAR });
  };

  return (
    <PlayerContext.Provider
      value={{
        playerData: state.playerData,
        addPlayer,
        getCharData,
        deleteChar,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerState;
