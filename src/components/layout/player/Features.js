import React from "react";
import ClassFeature from "../player/ClassFeature";
import RacialTraits from "../player/RacialTraits";
import CharDescription from "../player/CharDescription";
import CharEquipment from "../player/CharEquipment";
import CharProficiencies from "../player/CharProficiencies";

const Features = ({ data, setData }) => {
  return (
    <div className="row">
      <div className="col s12">
        <ul className="tabs">
          <li className="tab col s3">
            <a className="active" href="#test1">
              Features and Traits
            </a>
          </li>
          <li className="tab col s3">
            <a href="#test2">Description</a>
          </li>
          <li className="tab col s3">
            <a href="#test3">Equipment</a>
          </li>
          <li className="tab col s3">
            <a href="#test4">Proficiencies</a>
          </li>
        </ul>
      </div>
      <div id="test1" className="col s12">
        <ClassFeature />
        <RacialTraits />
      </div>
      <div id="test2" className="col s12">
        <CharDescription data={data} setData={setData} />
      </div>
      <div id="test3" className="col s12">
        <CharEquipment />
      </div>
      <div id="test4" className="col s12">
        <CharProficiencies />
      </div>
    </div>
  );
};

export default Features;
