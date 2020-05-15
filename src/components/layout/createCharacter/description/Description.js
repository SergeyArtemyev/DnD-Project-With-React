import React from "react";
import DescAvatars from "./DescAvatars";
import Background from "./Background";

const Description = () => {
  return (
    <div>
      <h4 className="center-align">Character Description</h4>
      <DescAvatars />
      <h4 className="center-align">Background</h4>
      <Background />
      <hr />
    </div>
  );
};

export default Description;
