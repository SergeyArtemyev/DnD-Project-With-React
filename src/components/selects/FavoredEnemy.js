import React from "react";

const FavoredEnemy = () => {
  return (
    <>
      <select name="favoredEnemy" className="browser-default">
        <option value="none">- Choose an Option -</option>
        <option value="Beasts">Beasts</option>
        <option value="Dragons">Dragons</option>
        <option value="Fey">Fey</option>
        <option value="Giants">Giants</option>
        <option value="Humanoids">Humanoids</option>
        <option value="Undead">Undead</option>
      </select>
    </>
  );
};

export default FavoredEnemy;
