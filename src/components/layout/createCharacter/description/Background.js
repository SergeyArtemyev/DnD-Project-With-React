import React, { useContext, useState, useEffect } from "react";
import BackgroundContext from "../../../../context/Background/backgroundContext";
import BackOptions from "./BackOptions";
import Skill1 from "../../../selects/Skill1";
import Skill2 from "../../../selects/Skill2";

import M from "materialize-css/dist/js/materialize.min.js";
import { v4 } from "uuid";

const Background = () => {
  const backgroundContext = useContext(BackgroundContext);
  const [backgroundName, setBackgroundName] = useState("");
  const {
    getBackground,
    description: { info, skillProff, toolProff, vehicleProff, backFeature, featureInfo },
  } = backgroundContext;

  useEffect(() => {
    getBackground(backgroundName);
    M.AutoInit();
    // eslint-disable-next-line
  }, [backgroundName]);

  const onChange = (e) => {
    setBackgroundName(e.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="input-field col s4">
          <select className="browser-default" onChange={onChange}>
            <option value="">--Choose your background--</option>
            <option value="Acolyte">Acolyte</option>
            <option value="Criminal or Spy">Criminal/Spy</option>
            <option value="Folk Hero">Folk Hero</option>
            <option value="Haunted One">Haunted One</option>
            <option value="Sage">Sage</option>
            <option value="Soldier">Soldier</option>
          </select>
        </div>
      </div>
      {backgroundName === "" ? null : (
        <>
          <hr />
          <p>{info}</p>
          <div>
            Skill Proficiencies:{" "}
            {skillProff !== undefined
              ? skillProff.map((skill) => <span key={v4()}> {skill} </span>)
              : null}
            {backgroundName === "Haunted One" ? (
              <>
                <div className="row">
                  <div className="col s4">
                    <br />
                    <Skill1 />
                    <br />
                    <Skill2 />
                  </div>
                </div>
              </>
            ) : null}
          </div>
          {toolProff !== undefined ? <p>Tool Proficiencies: {toolProff}</p> : null}
          {vehicleProff !== undefined ? <p>Vehicle Proficiencies: {vehicleProff}</p> : null}
          <div className="row">
            <div className="col s4">
              <BackOptions />
            </div>
          </div>
          <ul className="collapsible">
            <li>
              <div className="collapsible-header">{backFeature}</div>
              <div className="collapsible-body">
                <span>{featureInfo}</span>
              </div>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default Background;
