import React from "react";

const AdLang2 = () => {
  return (
    <>
      <li>
        <label>Languages:</label>
        <br />
        <select name="adLanguage2" className="browser-default">
          <option value="none">- Choose a Language -</option>
          <option value="Abyssal">Abyssal</option>
          <option value="Draconic">Draconic</option>
          <option value="Elvish">Elvish</option>
          <option value="Goblin">Goblin</option>
          <option value="Halfling">Halfling</option>
          <option value="Orc">Orc</option>
        </select>
      </li>
    </>
  );
};

export default AdLang2;
