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
        <li className="collection-item">
          <span className="main-color underline">Hit Die:</span> {hitDie}
        </li>
        <li className="collection-item">
          <span className="main-color underline">Primary Ability:</span> {primAbil}
        </li>
        <li className="collection-item">
          <span className="main-color underline">Saves:</span> {saves}
        </li>
      </ul>
    </div>
  );
};

export default ClassFeatures;
