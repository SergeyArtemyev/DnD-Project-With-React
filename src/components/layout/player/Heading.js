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
  } = playerContext;

  return (
    <div className="heading row">
      <div className="avatar col s4">
        <img className="char-avatar" src={avatar} alt="" />
        <span className="name">{charName}</span>
      </div>
      <div className="col s6">
        <table>
          <tbody>
            <tr>
              <th>{playerClass}</th>
              <th>{background}</th>
              <th>{charName}</th>
            </tr>
            <tr>
              <td>class</td>
              <td>background</td>
              <td>player name</td>
            </tr>
            <tr>
              <th>{race}</th>
              <th>{alignment}</th>
              <th>1</th>
            </tr>
            <tr>
              <td>race</td>
              <td>alignment</td>
              <td>level</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Heading;
