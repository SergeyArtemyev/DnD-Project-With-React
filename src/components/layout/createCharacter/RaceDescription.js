import React, { useContext, useEffect } from "react";
import RaceContext from "../../../context/Race/raceContext";
import M from "materialize-css/dist/js/materialize.min.js";

const RaceDescription = () => {
  const raceContext = useContext(RaceContext);
  useEffect(() => {
    // Initialize Material JS
    M.AutoInit();
  });
  // Продолжить потом тут
  const changeArrow = (e) => {
    if (
      e.target.parentElement === document.querySelector(".desc-li") ||
      e.target.parentElement.parentElement === document.querySelector(".desc-li")
    ) {
    }
  };

  const {
    description: { info, abScInc, age, alignment, size, speed, languages },
  } = raceContext;

  return (
    <div className="description">
      <h3>Description</h3>
      <p>{info}</p>
      <ul className="collapsible expandable">
        <li className="desc-li">
          <div className="collapsible-header" onClick={changeArrow}>
            <span>Ability Score Increase</span>
            <i className="material-icons">arrow_downward</i>
          </div>
          <div className="collapsible-body">
            <span>{abScInc}</span>
          </div>
        </li>
        <li>
          <div className="collapsible-header center-align">Age</div>
          <div className="collapsible-body">
            <span>{age}</span>
          </div>
        </li>
        <li>
          <div className="collapsible-header center-align">Alignment</div>
          <div className="collapsible-body">
            <span>{alignment}</span>
          </div>
        </li>
        <li>
          <div className="collapsible-header center-align">Size</div>
          <div className="collapsible-body">
            <span>{size}</span>
          </div>
        </li>
        <li>
          <div className="collapsible-header center-align">Speed</div>
          <div className="collapsible-body">
            <span>{speed}</span>
          </div>
        </li>
        <li>
          <div className="collapsible-header center-align">Languages</div>
          <div className="collapsible-body">
            <span>{languages}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RaceDescription;
