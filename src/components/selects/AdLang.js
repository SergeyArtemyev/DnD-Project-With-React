import React from "react";

const AdLang = () => {
  return (
    <>
      <li>
        <label>Languages:</label>
        <br />
        <select name="adLanguage" className="browser-default">
          <option value="none">- Choose an Extra Language -</option>
          <option value="Abyssal">Abyssal</option>
          <option value="Draconic">Draconic</option>
          <option value="Elvish">Elvish</option>
          <option value="Goblin">Goblin</option>
          <option value="Hafling">Halfling</option>
          <option value="Orc">Orc</option>
        </select>
      </li>
    </>
  );
};

export default AdLang;
