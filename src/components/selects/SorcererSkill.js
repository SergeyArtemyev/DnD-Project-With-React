import React from "react";

const SorcererSkill = () => {
  return (
    <>
      <select name="sorcererSkill1" className="browser-default">
        <option value="none">- Choose a Sorcerer Skill -</option>
        <option value="Arcana">Arcana</option>
        <option value="Deception">Deception</option>
        <option value="Insight">Insight</option>
        <option value="Intimidation">Intimidation</option>
        <option value="Persuasion">Persuasion</option>
        <option value="Religion">Religion</option>
      </select>
      <br />
      <select name="sorcererSkill2" className="browser-default">
        <option value="none">- Choose a Sorcerer Skill -</option>
        <option value="Arcana">Arcana</option>
        <option value="Deception">Deception</option>
        <option value="Insight">Insight</option>
        <option value="Intimidation">Intimidation</option>
        <option value="Persuasion">Persuasion</option>
        <option value="Religion">Religion</option>
      </select>
    </>
  );
};

export default SorcererSkill;
