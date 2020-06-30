import React, { useContext, useEffect } from "react";
import PlayerContext from "../../../context/Player/playerContext";

const CharEquipment = () => {
  const playerContext = useContext(PlayerContext);

  useEffect(() => {
    getCharData();
    // eslint-disable-next-line
  }, []);

  const {
    playerData: { mWeapon, sWeapon, potions, stuff },
    getCharData,
  } = playerContext;

  return (
    <div>
      <h3>Your starting equipment</h3>
      <p className="main-color underline">Main Weapon</p>
      <ul className="browser-default">
        <li>{mWeapon}</li>
      </ul>
      <p className="main-color underline">Secondary Weapon</p>
      <ul className="browser-default">
        <li>{sWeapon}</li>
      </ul>
      <p className="main-color underline">Potions</p>
      <ul className="browser-default">
        <li>{potions}</li>
      </ul>
      <p className="main-color underline">Other Stuff</p>
      <ul className="browser-default">
        <li>{stuff}</li>
      </ul>
    </div>
  );
};

export default CharEquipment;
