import React from "react";
import PlayerContext from "./playerContext";
import axios from "axios";

const PlayerState = (props) => {
  // Get race and racial traits
  const addPlayer = async (playerdata) => {
    const config = {
      headers: {
        "Content-Type": "Application/json",
      },
    };
    await axios.post("http://localhost:5000/player", playerdata, config);
  };

  return (
    <PlayerContext.Provider
      value={{
        addPlayer,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerState;
