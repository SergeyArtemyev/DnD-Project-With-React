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
      skill1,
      skill2,
    },
    getCharData,
  } = playerContext;

  useEffect(() => {
    getCharData();
    background !== undefined ? getBackground(background) : console.log("waiting");
    // eslint-disable-next-line
  }, [background]);

  useEffect(() => {
    if (skill1) {
      data.array.push(skill1, skill2);
      setData({ ...data });
    } else if (skillProff) {
      data.array.push(...skillProff);
      setData({ ...data });
    }
    // eslint-disable-next-line
  }, [skillProff, skill1, skill2]);

  return (
    <div>
      <h3>Background</h3>
      <p className="main-color underline">{background}</p>
      <p>{info}</p>
      {background === "Haunted One" ? (
        <>
          <p className="main-color underline">Proficiency</p>
          <ul className="browser-default">
            <li>{skill1}</li>
            <li>{skill2}</li>
          </ul>
        </>
      ) : (
        <>
          <p className="main-color underline">Proficiency</p>
          <ul className="browser-default">
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
            <th className="main-color underline">Alignment</th>
            <th className="main-color underline">Gender</th>
            <th className="main-color underline">Eyes</th>
            <th className="main-color underline">Lifestyle</th>
            <th className="main-color underline">Height</th>
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
            <th className="main-color underline">Faith</th>
            <th className="main-color underline">Hair</th>
            <th className="main-color underline">Skin</th>
            <th className="main-color underline">Age</th>
            <th className="main-color underline">Weight</th>
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
