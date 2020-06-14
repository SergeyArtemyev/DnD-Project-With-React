import React, { useState, useContext, useEffect } from "react";
import RaceContext from "../../../../context/Race/raceContext";
import human from "../../../../img/form_img/human.jpg";
import elf from "../../../../img/form_img/elf.jpg";
import halfling from "../../../../img/form_img/halfling.jpg";
import dwarf from "../../../../img/form_img/dwarf.jpg";
import RaceTraits from "./RaceTraits";
import RaceDescription from "./RaceDescription";

import abilityScoreFunction from "../../../../js/abilityScoreFunction";

const Race = () => {
  const raceContext = useContext(RaceContext);
  const [racePicture, setRacePicture] = useState("");

  const { getRace } = raceContext;

  useEffect(() => {
    getRace(racePicture);
    abilityScoreFunction();
    console.log(2);

    // eslint-disable-next-line
  }, [racePicture]);
  console.log(1);
  const onChange = (e) => {
    setRacePicture(e.target.value);
  };

  let raceAvatar;
  if (racePicture === "Human") {
    raceAvatar = human;
  } else if (racePicture === "Elf") {
    raceAvatar = elf;
  } else if (racePicture === "Halfling") {
    raceAvatar = halfling;
  } else if (racePicture === "Dwarf") {
    raceAvatar = dwarf;
  } else {
    raceAvatar = "";
  }

  return (
    <div className="race">
      <h4 className="center-align">Choose your race</h4>
      <div className="row">
        <div className="col s12 m12 l6">
          <div className="row">
            <div className="col m6 s6">
              <div className="input-fields col s12 m12">
                <select onChange={onChange} name="race" id="race" className="icons">
                  <option value="" defaultValue>
                    Choose Race
                  </option>
                  <option data-icon={human} value="Human">
                    Human
                  </option>
                  <option data-icon={elf} value="Elf">
                    Elf
                  </option>
                  <option data-icon={halfling} value="Halfling">
                    Halfling
                  </option>
                  <option data-icon={dwarf} value="Dwarf">
                    Dwarf
                  </option>
                </select>
              </div>
              <div className="img-wraper">
                <img src={raceAvatar} alt={raceAvatar} />
              </div>
            </div>
            <div className="col m6 s6">
              <h6>Racial traits</h6>
              {racePicture !== "" ? <RaceTraits /> : null}
            </div>
          </div>
        </div>
        <div className="col s12 m12 l6">{racePicture !== "" ? <RaceDescription /> : null}</div>
      </div>
    </div>
  );
};

export default Race;
