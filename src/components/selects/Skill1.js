import React from "react";

const Skill1 = () => {
  return (
    <>
      <select name="skill1" className="browser-default">
        <option value="none">- Choose a Skill -</option>
        <option value="Arcana">Arcana</option>
        <option value="Investigation">Investigation</option>
        <option value="Religion">Religion</option>
        <option value="Survival">Survival</option>
      </select>
    </>
  );
};

export default Skill1;
