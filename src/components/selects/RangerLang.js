import React from "react";

const RangerLang = () => {
  return (
    <>
      <select name="rangerLang" className="browser-default">
        <option value="none">- Choose a Language -</option>
        <option value="Abyssal">Abyssal</option>
        <option value="Draconic">Draconic</option>
        <option value="Elvish">Elvish</option>
        <option value="Goblin">Goblin</option>
        <option value="Halfling">Halfling</option>
        <option value="Orc">Orc</option>
      </select>
    </>
  );
};

export default RangerLang;
