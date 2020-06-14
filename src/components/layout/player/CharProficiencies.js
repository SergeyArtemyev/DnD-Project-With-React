import React, { useContext, useEffect } from "react";
import ClassContext from "../../../context/Class/classContext";
import PlayerContext from "../../../context/Player/playerContext";

const CharProficiencies = () => {
  const classContext = useContext(ClassContext);
  const playerContext = useContext(PlayerContext);

  const {
    getClass,
    description: { profArmor, profWeapons, profTool },
  } = classContext;

  useEffect(() => {
    getCharData();
    // eslint-disable-next-line
  }, []);
  const {
    playerData: { playerClass, vehicleProff },
    getCharData,
  } = playerContext;

  useEffect(() => {
    playerClass !== undefined ? getClass(playerClass) : console.log("waiting");
    // eslint-disable-next-line
  }, [playerClass]);

  return (
    <div className="proficiencies white">
      <h3>Proficiencies</h3>
      <p>
        <span className="main-color">Proficient in Armor:</span>
        {profArmor}
      </p>
      <p>
        <span className="main-color">Proficient in Weapon:</span>
        {profWeapons}
      </p>
      <p>
        <span className="main-color">Proficient in Vehicles:</span>
        {vehicleProff === undefined ? "None" : vehicleProff}
      </p>
      <p>
        <span className="main-color">Proficient in Tools:</span>
        {profTool === undefined ? "None" : profTool}
      </p>
    </div>
  );
};

export default CharProficiencies;
