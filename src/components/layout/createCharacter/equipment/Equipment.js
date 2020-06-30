import React, { useEffect } from "react";
import chooseEquipment from "../../../../js/chooseEquipment";

const Equipment = () => {
  useEffect(() => {
    chooseEquipment();
  });

  return (
    <>
      <h4 className="center-align">Choose Stating Equipment</h4>
      <div className="ch-equipment">
        <div className="main-weapon">
          <h5 className="center-align">Main Weapon</h5>
          <div style={{ textAlign: "left", width: "300px", margin: "0 auto" }}>
            <label>
              <input type="checkbox" name="mWeapon" id="sword" value="Sword" />
              <span>Sword</span>
            </label>
            <br />
            <label>
              <input type="checkbox" name="mWeapon" id="crossbow" value="Crossbow" />
              <span>Crossbow</span>
            </label>
            <br />
            <label>
              <input type="checkbox" name="mWeapon" id="wand" value="Magic Wand" />
              <span>Magic Wand</span>
            </label>
            <br />
            <label>
              <input type="checkbox" name="mWeapon" id="dagger" value="Dagger" />
              <span>Dagger</span>
            </label>
          </div>
        </div>
        <div className="secondary-weapon">
          <h5 className="center-align">Secondary Weapon</h5>
          <div style={{ textAlign: "left", width: "300px", margin: "0 auto" }}>
            <label>
              <input type="checkbox" name="sWeapon" id="twohanded-sw" value="Two-Handed Sword" />
              <span>Two-handed Sword</span>
            </label>
            <br />
            <label>
              <input type="checkbox" name="sWeapon" id="bow" value="Bow" />
              <span>Bow</span>
            </label>
            <br />
            <label>
              <input type="checkbox" name="sWeapon" id="s-wand" value="Magic Wand" />
              <span>Magic Wand</span>
            </label>
            <br />
            <label>
              <input type="checkbox" name="sWeapon" id="s-dagger" value="Dagger" />
              <span>Dagger</span>
            </label>
          </div>
        </div>
        <div className="potions">
          <h5 className="center-align">Potions</h5>
          <div style={{ textAlign: "left", width: "300px", margin: "0 auto" }}>
            <label>
              <input type="checkbox" name="potions" id="heal" value="2 Heal Potions" />
              <span>2 Healing Potion</span>
            </label>
            <br />
            <label>
              <input type="checkbox" name="potions" id="mana" value="2 Mana Potions" />
              <span>2 Mana Potion</span>
            </label>
            <br />
            <label>
              <input type="checkbox" name="potions" id="poison" value="2 poison Potions" />
              <span>2 Poison Potion</span>
            </label>
            <br />
            <label>
              <input type="checkbox" name="potions" id="endurance" value="2 Endurance Potions" />
              <span>2 Endurance Potion</span>
            </label>
          </div>
        </div>
        <div className="other-stuff">
          <h5 className="center-align">Other Stuff</h5>
          <div style={{ textAlign: "left", width: "300px", margin: "0 auto" }}>
            <label>
              <input type="checkbox" name="stuff" id="gold" value="20 Gold" />
              <span>20 Gold</span>
            </label>
            <br />
            <label>
              <input type="checkbox" name="stuff" id="lockpick" value="5 Lockpick" />
              <span>5 Lockpicks</span>
            </label>
            <br />
            <label>
              <input type="checkbox" name="stuff" id="arrows" value="15 Arrows" />
              <span>15 Arrows</span>
            </label>
            <br />
            <label>
              <input type="checkbox" name="stuff" id="smithTools" value="Smoth's Tools" />
              <span>Smith's Tools</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Equipment;
