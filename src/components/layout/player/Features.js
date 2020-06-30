import React from "react";
import ClassFeature from "../player/ClassFeature";
import RacialTraits from "../player/RacialTraits";
import CharDescription from "../player/CharDescription";
import CharEquipment from "../player/CharEquipment";
import CharProficiencies from "../player/CharProficiencies";

const Features = ({ data, setData }) => {
  return (
    <div className="row tab-container">
      <div className="col s12">
        <ul className="tabs">
          <li className="tab col s3">
            <a className="active" href="#featuresTraits">
              Features and Traits
            </a>
          </li>
          <li className="tab col s3">
            <a href="#charDescription">Description</a>
          </li>
          <li className="tab col s3">
            <a href="#charEquipment">Equipment</a>
          </li>
          <li className="tab col s3">
            <a href="#charProficiencies">Proficiencies</a>
          </li>
        </ul>
      </div>
      <div>
        <div id="featuresTraits" className="col s12">
          <div className="white p-1">
            <ClassFeature data={data} setData={setData} />
            <RacialTraits />
          </div>
        </div>
        <div id="charDescription" className="col s12">
          <div className="white p-1">
            <CharDescription data={data} setData={setData} />
          </div>
        </div>
        <div id="charEquipment" className="col s12">
          <div className="white p-1">
            <CharEquipment />
          </div>
        </div>
        <div id="charProficiencies" className="col s12">
          <div className="white p-1">
            <CharProficiencies />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
