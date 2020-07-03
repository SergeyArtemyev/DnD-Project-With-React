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
        <div className="input-field col l4 s8">
          <select className="browser-default" name="background" onChange={onChange}>
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
            <span className="main-color underline">Skill Proficiencies:</span>{" "}
            <ul className="browser-default">
              {skillProff !== undefined
                ? skillProff.map((skill) => <li key={v4()}> {skill} </li>)
                : null}
            </ul>
            {backgroundName === "Haunted One" ? (
              <>
                <div className="row">
                  <div className="col l4 m6 s12">
                    <br />
                    <Skill1 />
                    <br />
                    <Skill2 />
                  </div>
                </div>
              </>
            ) : null}
          </div>
          {toolProff !== undefined ? (
            <p>
              <span className="main-color underline">Tool Proficiencies:</span>
              <ul className="browser-default">
                <li>{toolProff}</li>
              </ul>
            </p>
          ) : null}
          {vehicleProff !== undefined ? (
            <p>
              <span className="main-color underline">Vehicle Proficiencies:</span>
              <ul className="browser-default">
                <li>{vehicleProff}</li>
              </ul>
            </p>
          ) : null}
          <div className="row">
            <div className="col l4 m6 s12">
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
