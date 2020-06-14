import React from "react";

const Expertise = () => {
  return (
    <>
      <select name="expertise1" className="browser-default">
        <option value="none">- Choose Rouge Expertise -</option>
        <option value="Deception">Deception</option>
        <option value="Stealth">Stealth</option>
        <option value="Thieves' Tools">Thieves' Tools</option>
      </select>
      <br />
      <select name="expertise2" className="browser-default">
        <option value="none">- Choose Rouge Expertise -</option>
        <option value="Deception">Deception</option>
        <option value="Stealth">Stealth</option>
        <option value="Thieves' Tools">Thieves' Tools</option>
      </select>
    </>
  );
};

export default Expertise;
