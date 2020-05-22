import React from "react";

const ArtisanTool = () => {
  return (
    <>
      <li>
        <select name="artisanTool" className="browser-default">
          <option value="none">- Choose a Artisan's Tool -</option>
          <option value="Alchemist's Supplies">Alchemist's Supplies</option>
          <option value="Brewer's Supplies">Brewer's Supplies</option>
          <option value="Carpenter's Tools">Carpenter's Tools</option>
          <option value="Jeweler's Tools">Jeweler's Tools</option>
          <option value="Mason's Tools">Mason's Tools</option>
          <option value="Smith's Tools">Smith's Tools</option>
        </select>
      </li>
    </>
  );
};

export default ArtisanTool;
