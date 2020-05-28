import React, { useState, useContext, useEffect } from "react";
import ClassContext from "../../../../context/Class/classContext";
import fighter from "../../../../img/form_img/fighter.jpeg";
import ranger from "../../../../img/form_img/ranger.jpeg";
import rogue from "../../../../img/form_img/rogue.jpeg";
import sorcerer from "../../../../img/form_img/sorcerer.jpeg";
import ClassFeature from "./ClassFeatures";
import ClassDescription from "./ClassDescription";

const Class = () => {
  const classContext = useContext(ClassContext);
  const [classPicture, setClassPicture] = useState("");

  const { getClass } = classContext;

  useEffect(() => {
    getClass(classPicture);
    // eslint-disable-next-line
  }, [classPicture]);

  const onChange = (e) => {
    setClassPicture(e.target.value);
  };

  let classAvatar;
  if (classPicture === "Fighter") {
    classAvatar = fighter;
  } else if (classPicture === "Ranger") {
    classAvatar = ranger;
  } else if (classPicture === "Rogue") {
    classAvatar = rogue;
  } else if (classPicture === "Sorcerer") {
    classAvatar = sorcerer;
  } else {
    classAvatar = "";
  }
  return (
    <div className="class">
      <h4 className="center-align">Choose your Class</h4>
      <div className="row">
        <div className="col s12 m12 l6">
          <div className="row">
            <div className="col m6 s6">
              <div className="input-fields col s12 m12">
                <select className="icons" name="class" onChange={onChange}>
                  <option value="" defaultValue>
                    Choose Class
                  </option>
                  <option data-icon={fighter} value="Fighter">
                    Fighter
                  </option>
                  <option data-icon={ranger} value="Ranger">
                    Ranger
                  </option>
                  <option data-icon={rogue} value="Rogue">
                    Rogue
                  </option>
                  <option data-icon={sorcerer} value="Sorcerer">
                    Sorcerer
                  </option>
                </select>
              </div>
              <div className="img-wraper">
                <img src={classAvatar} alt={classAvatar} />
              </div>
            </div>
            <div className="col m6 s6">
              <h6>Class Features</h6>
              {classPicture !== "" ? <ClassFeature /> : null}
            </div>
          </div>
        </div>
        <div className="col s12 m12 l6">{classPicture !== "" ? <ClassDescription /> : null}</div>
      </div>
    </div>
  );
};

export default Class;
