import React, { useContext, useEffect } from "react";
import PlayerContext from "../../../context/Player/playerContext";

const AcInitSpeed = () => {
  const playerContext = useContext(PlayerContext);

  useEffect(() => {
    getCharData();
    // eslint-disable-next-line
  }, []);

  const {
    playerData: { dexMod, conMod, race, playerClass },
    getCharData,
  } = playerContext;

  function getAcInSpHp() {
    let speed, hp;
    if (race === "Human" || race === "Elf") {
      speed = 30;
    } else {
      speed = 25;
    }
    if (playerClass === "Fighter" || playerClass === "Ranger") {
      hp = 10 + +conMod;
    }
    if (playerClass === "Rogue") {
      hp = 8 + +conMod;
    }
    if (playerClass === "Sorcerer") {
      hp = 6 + +conMod;
    }
    return { speed, hp };
  }

  return (
    <div className="row ac-init-speed">
      <div className="col s3">
        <div className="ac center-align">
          <p>15</p>
          <p>ac</p>
        </div>
      </div>
      <div className="col s3">
        <div className="init center-align">
          <p>{dexMod}</p>
          <p>init</p>
        </div>
      </div>
      <div className="col s3">
        <div className="speed center-align">
          <p>{getAcInSpHp().speed} ft</p>
          <p>speed</p>
        </div>
      </div>
      <div className="col s3">
        <div className="hp center-align">
          <p>{getAcInSpHp().hp}</p>
          <p>hit points</p>
        </div>
      </div>
    </div>
  );
};

export default AcInitSpeed;
