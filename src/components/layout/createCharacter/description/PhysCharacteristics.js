import React from "react";

const PhysCharacteristics = () => {
  return (
    <>
      <div className="row">
        <div className="col s4">
          <div className="input-field">
            <input id="hair" type="text" name="hair" className="validate" />
            <label htmlFor="hair">Hair</label>
          </div>
          <div className="input-field">
            <input id="skin" type="text" name="skin" className="validate" />
            <label htmlFor="skin">Skin</label>
          </div>
          <div className="input-field">
            <input id="eyes" type="text" name="eyes" className="validate" />
            <label htmlFor="eyes">Eyes</label>
          </div>
          <div className="input-field">
            <input id="height" type="text" name="height" className="validate" />
            <label htmlFor="height">Height</label>
          </div>
          <div className="input-field">
            <input id="weight" type="text" name="weight" className="validate" />
            <label htmlFor="weight">Weight{"(kg)"}</label>
          </div>
          <div className="input-field">
            <input id="age" type="text" name="age" className="validate" />
            <label htmlFor="age">Age</label>
          </div>
          <div className="input-field">
            <input id="gender" type="text" name="gender" className="validate" />
            <label htmlFor="gender">Gender</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhysCharacteristics;
