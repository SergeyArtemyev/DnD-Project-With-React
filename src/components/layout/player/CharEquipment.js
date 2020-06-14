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
    <div className="equipment white">
      <h3>Your starting equipment</h3>
      <p className="underline">Main Weapon</p>
      <ul>
        <li>{mWeapon}</li>
      </ul>
      <p className="underline">Secondary Weapon</p>
      <ul>
        <li>{sWeapon}</li>
      </ul>
      <p className="underline">Potions</p>
      <ul>
        <li>{potions}</li>
      </ul>
      <p className="underline">Other Stuff</p>
      <ul>
        <li>{stuff}</li>
      </ul>
    </div>
  );
};

export default CharEquipment;
