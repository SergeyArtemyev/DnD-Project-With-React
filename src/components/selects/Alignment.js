import React from "react";

const Alignment = () => {
  return (
    <>
      <label htmlFor="alignment">Alignment</label>
      <br />
      <select name="alignment" id="alignment" className="browser-default" required>
        <option value="none">- Choose an Option -</option>
        <option value="Chaotic Evil">Chaotic Evil</option>
        <option value="Chaotic Good">Chaotic Good</option>
        <option value="Chaotic Neutral">Chaotic Neutral</option>
        <option value="Lawful Evil">Lawful Evil</option>
        <option value="Lawful Good">Lawful Good</option>
        <option value="Lawful Neutral">Lawful Neutral</option>
        <option value="Neutral">Neutral</option>
        <option value="Neutral Evil">Neutral Evil</option>
        <option value="Neutral Good">Neutral Good</option>
      </select>
    </>
  );
};

export default Alignment;
