import React from "react";

const FighterSkill = () => {
  return (
    <>
      <select name="fighter-skill-1" className="browser-default">
        <option value="none">- Choose a Fighter Skill -</option>
        <option value="Acrobatics">Acrobatics</option>
        <option value="Animal Handling">Animal Handling</option>
        <option value="Athletics">Athletics</option>
        <option value="History">History</option>
        <option value="Insight">Insight</option>
        <option value="Intimidation">Intimidation</option>
        <option value="Perception">Perception</option>
        <option value="Survival">Survival</option>
      </select>
      <br />
      <select name="fighter-skill-2" className="browser-default">
        <option value="none">- Choose a Fighter Skill -</option>
        <option value="Acrobatics">Acrobatics</option>
        <option value="Animal Handling">Animal Handling</option>
        <option value="Athletics">Athletics</option>
        <option value="History">History</option>
        <option value="Insight">Insight</option>
        <option value="Intimidation">Intimidation</option>
        <option value="Perception">Perception</option>
        <option value="Survival">Survival</option>
      </select>
    </>
  );
};

export default FighterSkill;
