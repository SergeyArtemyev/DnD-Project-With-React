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
  // Here i could add ready property for data object to prevent running this function until the data.array is filled up
  const skills = document.querySelectorAll(".skill");

  const isProf = () => {
    const profSkills = data.array;
    skills.forEach((skill) => {
      if (profSkills.includes(skill.innerHTML)) {
        skill.previousElementSibling.previousElementSibling.classList.add("prof-y");
      }
    });
  };

  if (skills.length > 0) {
    isProf();
  }

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
        <span className="wis underline">
          {data.array.includes("Animal Handling") ? +wisMod + 2 : wisMod}
        </span>{" "}
        <span className="skill">Animal Handling</span> <span className="ab-skill">(Wis)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="int underline">
          {data.array.includes("Arcana") ? +intMod + 2 : intMod}
        </span>{" "}
        <span className="skill">Arcana</span> <span className="ab-skill">(Int)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="str underline">
          {data.array.includes("Athletics") ? +strMod + 2 : strMod}
        </span>{" "}
        <span className="skill">Athletics</span> <span className="ab-skill">(Str)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="cha underline">
          {data.array.includes("Deception") ? +charMod + 2 : charMod}
        </span>{" "}
        <span className="skill">Deception</span> <span className="ab-skill">(Cha)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="int underline">
          {data.array.includes("History") ? +intMod + 2 : intMod}
        </span>{" "}
        <span className="skill">History</span> <span className="ab-skill">(Int)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="wis underline">
          {data.array.includes("Insight") ? +wisMod + 2 : wisMod}
        </span>{" "}
        <span className="skill">Insight</span> <span className="ab-skill">(Wis)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="cha underline">
          {data.array.includes("Intimidation") ? +charMod + 2 : charMod}
        </span>{" "}
        <span className="skill">Intimidation</span> <span className="ab-skill">(Cha)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="int underline">
          {data.array.includes("Investigation") ? +intMod + 2 : intMod}
        </span>{" "}
        <span className="skill">Investigation</span> <span className="ab-skill">(Int)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="wis underline">
          {data.array.includes("Medicine") ? +wisMod + 2 : wisMod}
        </span>{" "}
        <span className="skill">Medicine</span> <span className="ab-skill">(Wis)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="int underline">
          {data.array.includes("Nature") ? +intMod + 2 : intMod}
        </span>{" "}
        <span className="skill">Nature</span> <span className="ab-skill">(Int)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="wis underline">
          {data.array.includes("Perception") ? +wisMod + 2 : wisMod}
        </span>{" "}
        <span className="skill">Perception</span> <span className="ab-skill">(Wis)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="cha underline">
          {data.array.includes("Perfomance") ? +charMod + 2 : charMod}
        </span>{" "}
        <span className="skill">Perfomance</span> <span className="ab-skill">(Cha)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="cha underline">
          {data.array.includes("Persuasion") ? +charMod + 2 : charMod}
        </span>{" "}
        <span className="skill">Persuasion</span> <span className="ab-skill">(Cha)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="int underline">
          {data.array.includes("Religion") ? +intMod + 2 : intMod}
        </span>{" "}
        <span className="skill">Religion</span> <span className="ab-skill">(Int)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="dex underline">
          {data.array.includes("Sleight of Hand") ? +dexMod + 2 : dexMod}
        </span>{" "}
        <span className="skill">Sleight of Hand</span> <span className="ab-skill">(Dex)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="dex underline">
          {data.array.includes("Stealth") ? +dexMod + 2 : dexMod}
        </span>{" "}
        <span className="skill">Stealth</span> <span className="ab-skill">(Dex)</span>
      </p>
      <p>
        <span className="circle"></span>
        <span className="wis underline">
          {data.array.includes("Survival") ? +wisMod + 2 : wisMod}
        </span>{" "}
        <span className="skill">Survival</span> <span className="ab-skill">(Wis)</span>
      </p>
      <p className="main-color underline center-align">Skills</p>
    </div>
  );
};

export default Skills;
