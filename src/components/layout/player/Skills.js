import React, { useContext, useEffect } from "react";
import PlayerContext from "../../../context/Player/playerContext";

const Skills = ({ data }) => {
  const playerContext = useContext(PlayerContext);

  const {
    playerData: { strMod, dexMod, intMod, charMod, wisMod },
    getCharData,
  } = playerContext;

  useEffect(() => {
    getCharData();
    // eslint-disable-next-line
  }, []);
  // Работает!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // Написать инклюдс всем и удалить тру

  console.log(data);

  return (
    <div className="skills white">
      <p>
        <span className="circle"></span>
        <span className="dex underline">
          {data.array.includes("Acrobatics") ? +dexMod + 2 : dexMod}
        </span>{" "}
        <span className="skill">Acrobatics</span> <span className="ab-skill">(Dex)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="wis underline">{wisMod}</span>{" "}
        <span className="skill">Animal Handling</span> <span className="ab-skill">(Wis)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="int underline">{intMod}</span> <span className="skill">Arcana</span>{" "}
        <span className="ab-skill">(Int)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="str underline">
          {strMod}
        </span> <span className="skill">Athletics</span> <span className="ab-skill">(Str)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="cha underline">
          {charMod}
        </span> <span className="skill">Deception</span> <span className="ab-skill">(Cha)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="int underline">{intMod}</span> <span className="skill">History</span>{" "}
        <span className="ab-skill">(Int)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="wis underline">{wisMod}</span> <span className="skill">Insight</span>{" "}
        <span className="ab-skill">(Wis)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="cha underline">
          {charMod}
        </span> <span className="skill">Intimidation</span> <span className="ab-skill">(Cha)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="int underline">
          {intMod}
        </span> <span className="skill">Investigation</span> <span className="ab-skill">(Int)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="wis underline">{wisMod}</span> <span className="skill">Medicine</span>{" "}
        <span className="ab-skill">(Wis)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="int underline">{intMod}</span> <span className="skill">Nature</span>{" "}
        <span className="ab-skill">(Int)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="wis underline">
          {wisMod}
        </span> <span className="skill">Perception</span> <span className="ab-skill">(Wis)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="cha underline">
          {charMod}
        </span> <span className="skill">Perfomance</span> <span className="ab-skill">(Cha)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="cha underline">
          {charMod}
        </span> <span className="skill">Persuasion</span> <span className="ab-skill">(Cha)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="int underline">{intMod}</span> <span className="skill">Religion</span>{" "}
        <span className="ab-skill">(Int)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="dex underline">{dexMod}</span>{" "}
        <span className="skill">Sleight of Hand</span> <span className="ab-skill">(Dex)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="dex underline">{dexMod}</span> <span className="skill">Stealth</span>{" "}
        <span className="ab-skill">(Dex)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="wis underline">{wisMod}</span> <span className="skill">Survival</span>{" "}
        <span className="ab-skill">(Wis)</span>
      </p>
      <p className="underline grey-color text-align-center">Skills</p>
    </div>
  );
};

export default Skills;