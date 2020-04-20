import React, { useContext } from "react";
import ClassContext from "../../../../context/Class/classContext";

const ClassFeatures = () => {
  const classContext = useContext(ClassContext);

  const {
    classFeatures: { hitDie, primAbil, saves },
  } = classContext;

  return (
    <div>
      <ul className="collection">
        <li className="collection-item">Hit Die : {hitDie}</li>
        <li className="collection-item">Primary Ability : {primAbil}</li>
        <li className="collection-item">Saves : {saves}</li>
      </ul>
    </div>
  );
};

export default ClassFeatures;
