import React, { useReducer } from "react";
import { GET_CLASS, GET_CLASS_FEATURES, GET_DESCRIPTION } from "../../types";
import ClassContext from "./classContext";
import ClassReducer from "./classReducer";
import axios from "axios";

const ClassState = (props) => {
  const initialState = {
    className: null,
    classFeatures: {},
    description: {},
  };

  const [state, dispatch] = useReducer(ClassReducer, initialState);

  // Get race and racial traits
  const getClass = async (className) => {
    const res = await axios.get(`http://localhost:5000/classes/${className}`);
    dispatch({
      type: GET_CLASS,
      payload: className,
    });
    dispatch({
      type: GET_CLASS_FEATURES,
      payload: res.data["class features"],
    });
    dispatch({
      type: GET_DESCRIPTION,
      payload: res.data.description,
    });
  };

  return (
    <ClassContext.Provider
      value={{
        className: state.className,
        classFeatures: state.classFeatures,
        description: state.description,
        getClass,
      }}
    >
      {props.children}
    </ClassContext.Provider>
  );
};

export default ClassState;
