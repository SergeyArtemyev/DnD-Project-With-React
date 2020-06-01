import React from "react";

const Cantrip = () => {
  return (
    <>
      <label>Cantrip</label>
      <select name="cantrip" className="browser-default">
        <option value="none">- Choose a Spell -</option>
        <option value="Control Flames">Control Flames</option>
        <option value="Gust">Gust</option>
        <option value="Frost Bite">Frost Bite</option>
        <option value="Light">Light</option>
        <option value="Minor Illusion">Minor Illusion</option>
        <option value="True Strike">True Strike</option>
      </select>
    </>
  );
};

export default Cantrip;
