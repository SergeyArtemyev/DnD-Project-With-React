import React, { useContext, useEffect } from "react";
import PlayerContext from "../../../context/Player/playerContext";

const AbilityPoints = () => {
  const playerContext = useContext(PlayerContext);

  useEffect(() => {
    getCharData();
    // eslint-disable-next-line
  }, []);

  const {
    playerData: {
      strMod,
      strengthPoints,
      dexMod,
      dexterityPoints,
      conMod,
      constitutionPoints,
      intMod,
      intelligencePoints,
      wisMod,
      wisdomPoints,
      charMod,
      charismaPoints,
    },
    getCharData,
  } = playerContext;

  return (
    <>
      <div className="ab-point">
        <p>str</p>
        <p>{strMod}</p>
        <p className="ab-border">{strengthPoints}</p>
      </div>
      <div className="ab-point">
        <p>dex</p>
        <p>{dexMod}</p>
        <p className="ab-border">{dexterityPoints}</p>
      </div>
      <div className="ab-point">
        <p>con</p>
        <p>{conMod}</p>
        <p className="ab-border">{constitutionPoints}</p>
      </div>
      <div className="ab-point">
        <p>int</p>
        <p>{intMod}</p>
        <p className="ab-border">{intelligencePoints}</p>
      </div>
      <div className="ab-point">
        <p>wis</p>
        <p>{wisMod}</p>
        <p className="ab-border">{wisdomPoints}</p>
      </div>
      <div className="ab-point">
        <p>char</p>
        <p>{charMod}</p>
        <p className="ab-border">{charismaPoints}</p>
      </div>
    </>
  );
};

export default AbilityPoints;
