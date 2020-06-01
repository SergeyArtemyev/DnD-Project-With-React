import React from "react";

const ToolProf = () => {
  return (
    <>
      <label>Tool Proficiency</label>
      <select name="toolProf" className="browser-default">
        <option value="none">- Choose a Dwarf Artisan's Tool -</option>
        <option value="Brewer's Supplies">Brewer's Supplies</option>
        <option value="Mason's Tools">Mason's Tools</option>
        <option value="Smith's Tools">Smith's Tools</option>
      </select>
    </>
  );
};

export default ToolProf;
