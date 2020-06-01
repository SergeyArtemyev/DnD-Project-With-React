import React, { useContext } from "react";
import RaceContext from "../../../../context/Race/raceContext";
import { v4 } from "uuid";
import HumanExLang from "../../../selects/HumanExLang";
import Cantrip from "../../../selects/Cantrip";
import ElfExLang from "../../../selects/ElfExLang";
import ToolProf from "../../../selects/ToolProf";

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
            <HumanExLang />
          </li>
        </>
      );
      break;
    case "Elf":
      select = (
        <>
          <li className="collection-item">
            <Cantrip />
          </li>
          <li className="collection-item">
            <ElfExLang />
          </li>
        </>
      );
      break;
    case "Dwarf":
      select = (
        <>
          <li className="collection-item">
            <ToolProf />
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
