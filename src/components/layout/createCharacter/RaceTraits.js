import React, { useContext } from "react";
import RaceContext from "../../../context/Race/raceContext";
import { v4 } from "uuid";

const RaceTraits = () => {
  const raceContext = useContext(RaceContext);

  const {
    race,
    racialTraits: { abscore, skills },
  } = raceContext;

  let select;

  switch (race) {
    case "Human":
      select = (
        <>
          <li className="collection-item">
            <label>Extra Language</label>
            <select name="human-extra-lang" className="browser-default">
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
      break;
    case "Elf":
      select = (
        <>
          <li className="collection-item">
            <label>Cantrip</label>
            <select name="cantrip" className="browser-default">
              <option value="none">- Choose a Spell -</option>
              <option value="Control Flames">Control Flames</option>
              <option value="Gust">Gust</option>
              <option value="Frost Bite">Frost Bite</option>
              <option value="Light">Light</option>
              <option value="Minor Illusion">Minor Illusion</option>
              <option value="True Strike">True Strike</option>
            </select>
          </li>
          <li className="collection-item">
            <label>Extra Language</label>
            <select name="elf-extra-lang" className="browser-default">
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
      break;
    case "Dwarf":
      select = (
        <>
          <li className="collection-item">
            <label>Tool Proficiency</label>
            <select name="toolProf" className="browser-default">
              <option value="none">- Choose a Dwarf Artisan's Tool -</option>
              <option value="Brewer's Supplies">Brewer's Supplies</option>
              <option value="Mason's Tools">Mason's Tools</option>
              <option value="Smith's Tools">Smith's Tools</option>
            </select>
          </li>
        </>
      );
      break;
    default:
      select = null;
  }
  return (
    <div>
      <ul className="collection">
        <li className="collection-item">{abscore}</li>
        {skills !== undefined
          ? skills.map((skill) => (
              <li key={v4()} className="collection-item">
                {skill}
              </li>
            ))
          : null}
        {select}
      </ul>
    </div>
  );
};

export default RaceTraits;
