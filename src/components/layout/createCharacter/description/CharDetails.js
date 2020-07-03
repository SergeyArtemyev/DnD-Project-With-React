import React from "react";
import Alignment from "../../../selects/Alignment";
import Lifestyle from "../../../selects/Lifestyle";

const CharDetails = () => {
  return (
    <>
      <div className="row">
        <div className="col l4 m6 s12">
          <Alignment />
          <br />
          <div className="input-field">
            <input id="faith" type="text" name="faith" className="validate" />
            <label htmlFor="faith">Faith</label>
          </div>
          <br />
          <Lifestyle />
        </div>
      </div>
    </>
  );
};

export default CharDetails;
