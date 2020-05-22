import React from "react";

const Lifestyle = () => {
  return (
    <>
      <label htmlFor="lifestyle">Lifestyle</label>
      <br />
      <select name="lifestyle" id="lifestyle" className="browser-default" required>
        <option value="none">- Choose a Lifestyle -</option>
        <option value="Wretched">Wretched</option>
        <option value="Squalid">Squalid</option>
        <option value="Poor">Poor</option>
        <option value="Modest">Modest</option>
        <option value="Comfortable">Comfortable</option>
        <option value="Wealthy">Wealthy</option>
        <option value="Aristocratic">Aristocratic</option>
      </select>
    </>
  );
};

export default Lifestyle;
