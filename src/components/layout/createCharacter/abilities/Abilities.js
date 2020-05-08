import React, { useEffect } from "react";
import AbilityScore from "./AbilityScore";
import AbPoints from "./AbPoints";
import abilityScoreFunction from "../../../../js/abilityScoreFunction";

const Abilities = () => {
  useEffect(() => {
    abilityScoreFunction();
  });
  return (
    <div>
      <h4 className="center-align">Ability Score</h4>
      <div className="row">
        <AbilityScore />
        <AbPoints />
      </div>
    </div>
  );
};

export default Abilities;
