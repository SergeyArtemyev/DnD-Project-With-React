import React, { useContext, useEffect } from "react";
import PlayerContext from "../../../context/Player/playerContext";

const Savings = () => {
  const playerContext = useContext(PlayerContext);

  useEffect(() => {
    getCharData();
    // eslint-disable-next-line
  }, []);

  const {
    playerData: { playerClass, strMod, dexMod, conMod, intMod, wisMod, charMod },
    getCharData,
  } = playerContext;

  function getSaving(s = 0, d = 0, c = 0, i = 0, w = 0, ch = 0) {
    if (playerClass === "Ranger" || playerClass === "Fighter") {
      s = 2;
    }
    if (playerClass === "Sorcerer" || playerClass === "Fighter") {
      c = 2;
    }
    if (playerClass === "Ranger" || playerClass === "Rogue") {
      d = 2;
    }
    if (playerClass === "Sorcerer") {
      ch = 2;
    }
    if (playerClass === "Rogue") {
      i = 2;
    }

    return { s, d, c, i, w, ch };
  }
  return (
    <div className="savings">
      <p>
        <span className="underline">{(strMod !== undefined ? +strMod : null) + getSaving().s}</span>{" "}
        Strength
      </p>
      <p>
        <span className="underline">{(dexMod !== undefined ? +dexMod : null) + getSaving().d}</span>{" "}
        Dexterity
      </p>
      <p>
        <span className="underline">{(conMod !== undefined ? +conMod : null) + getSaving().c}</span>{" "}
        Constitution
      </p>
      <p>
        <span className="underline">{(intMod !== undefined ? +intMod : null) + getSaving().i}</span>{" "}
        Intelligence
      </p>
      <p>
        <span className="underline">{(wisMod !== undefined ? +wisMod : null) + getSaving().w}</span>{" "}
        Wisdom
      </p>
      <p>
        <span className="underline">
          {(charMod !== undefined ? +charMod : null) + getSaving().ch}
        </span>{" "}
        Charisma
      </p>
      <p className="main-color underline center-align">saving throws</p>
    </div>
  );
};

export default Savings;
