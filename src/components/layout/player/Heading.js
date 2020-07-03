import React, { useContext, useEffect } from "react";
import PlayerContext from "../../../context/Player/playerContext";

const Heading = () => {
  const playerContext = useContext(PlayerContext);

  useEffect(() => {
    getCharData();
    // eslint-disable-next-line
  }, []);

  const {
    playerData: { race, playerClass, background, charName, alignment, avatar },
    getCharData,
    deleteChar,
  } = playerContext;

  const onClick = () => {
    deleteChar();
    window.location = "/";
  };

  return (
    <div className="row heading">
      <div className="avatar col s4">
        <img className="char-avatar" src={avatar} alt="" />
        <span className="name">{charName}</span>
      </div>
      <div className="col s6 row">
        <table>
          <tbody>
            <tr>
              <th className="main-color underline">Class</th>
              <th className="main-color underline">background</th>
              <th className="main-color underline">player name</th>
            </tr>
            <tr>
              <td>{playerClass}</td>
              <td>{background}</td>
              <td>{charName}</td>
            </tr>
            <tr>
              <th className="main-color underline">race</th>
              <th className="main-color underline">alignment</th>
              <th className="main-color underline">level</th>
            </tr>
            <tr>
              <td>{race}</td>
              <td>{alignment}</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col s2">
        <button id="delete-btn" onClick={onClick}>
          Delete Character
        </button>
      </div>
    </div>
  );
};

export default Heading;
