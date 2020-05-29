import React, { useReducer } from "react";
import { GET_BACKGROUND, GET_DESCRIPTION, GET_AVATAR } from "../../types";
import BackgroundContext from "./backgroundContext";
import BackgroundReducer from "./backgroundReducer";
import axios from "axios";

const BackgroundState = (props) => {
  const initialState = {
    background: null,
    description: {},
    avatar: null,
  };

  const [state, dispatch] = useReducer(BackgroundReducer, initialState);

  // Get background Name
  const getBackground = async (backgroundName) => {
    const res = await axios.get(`http://localhost:5000/background/${backgroundName}`);
    dispatch({
      type: GET_BACKGROUND,
      payload: backgroundName,
    });
    dispatch({
      type: GET_DESCRIPTION,
      payload: res.data.description,
    });
  };
  // Get Avatar
  const getAvatar = (avatar) => {
    dispatch({
      type: GET_AVATAR,
      payload: avatar,
    });
  };

  return (
    <BackgroundContext.Provider
      value={{
        background: state.background,
        description: state.description,
        avatar: state.avatar,
        getBackground,
        getAvatar,
      }}
    >
      {props.children}
    </BackgroundContext.Provider>
  );
};

export default BackgroundState;
