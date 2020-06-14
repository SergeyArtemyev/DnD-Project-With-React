import React from "react";

const FighterStyle = () => {
  return (
    <>
      <select name="fighterStyle" className="browser-default">
        <option value="none">- Choose an Option -</option>
        <option value="Archery">Archery</option>
        <option value="Defence">Defence</option>
        <option value="Dueling">Dueling</option>
        <option value="Great Weapon Fighting">Great Weapon Fighting</option>
        <option value="Protection">Protection</option>
        <option value="Two-Weapon Fighting">Two-Weapon Fighting</option>
      </select>
    </>
  );
};

export default FighterStyle;
