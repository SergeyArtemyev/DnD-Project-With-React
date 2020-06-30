import React, { useContext, useEffect } from "react";
import PlayerContext from "../../../context/Player/playerContext";
import BackgroundContext from "../../../context/Background/backgroundContext";

import { v4 } from "uuid";

const CharDescription = ({ data, setData }) => {
  const playerContext = useContext(PlayerContext);
  const backgroundContext = useContext(BackgroundContext);

  const {
    getBackground,
    description: { info, skillProff },
  } = backgroundContext;

  const {
    playerData: {
      background,
      alignment,
      gender,
      eyes,
      lifestyle,
      height,
      faith,
      hair,
      skin,
      age,
      weight,
    },
    getCharData,
  } = playerContext;

  useEffect(() => {
    getCharData();
    background !== undefined ? getBackground(background) : console.log("waiting");
    // eslint-disable-next-line
  }, [background]);

  useEffect(() => {
    if (skillProff) {
      data.array.push(...skillProff);
      setData({ ...data });
    }
    // eslint-disable-next-line
  }, [skillProff]);

  return (
    <div>
      <h3>Background</h3>
      <p className="main-color underline">{background}</p>
      <p>{info}</p>
      {background === "Haunted One" ? null : (
        <>
          <p className="main-color underline">Proficiency</p>
          <ul>
            {skillProff !== undefined
              ? skillProff.map((skill) => (
                  <li className="profskills" key={v4()}>
                    {" "}
                    {skill}{" "}
                  </li>
                ))
              : null}
          </ul>
        </>
      )}

      <p className="main-color underline">Characteristics</p>
      <table>
        <thead>
          <tr>
            <th>Alignment</th>
            <th>Gender</th>
            <th>Eyes</th>
            <th>Lifestyle</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{alignment}</td>
            <td>{gender}</td>
            <td>{eyes}</td>
            <td>{lifestyle}</td>
            <td>{height}</td>
          </tr>
          <tr>
            <td style={{ border: "none" }}></td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Faith</th>
            <th>Hair</th>
            <th>Skin</th>
            <th>Age</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{faith}</td>
            <td>{hair}</td>
            <td>{skin}</td>
            <td>{age}</td>
            <td>{weight}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CharDescription;
