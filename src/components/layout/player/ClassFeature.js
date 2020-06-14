import React, { useContext, useEffect } from "react";
import PlayerContext from "../../../context/Player/playerContext";

const ClassFeature = () => {
  const playerContext = useContext(PlayerContext);

  useEffect(() => {
    getCharData();
    // eslint-disable-next-line
  }, []);

  const {
    playerData: {
      playerClass,
      fighterSkill1,
      fighterSkill2,
      fighterStyle,
      rangerSkill1,
      rangerSkill2,
      rangerSkill3,
      rangerlang,
      naturalExplorer,
      favoredEnemy,
      rogueSkill1,
      rogueSkill2,
      rogueSkill3,
      rogueSkill4,
      expertise1,
      expertise2,
      sorcereSkill1,
      sorcereSkill2,
    },
    getCharData,
  } = playerContext;

  let classFeatures;
  if (playerClass === "Fighter") {
    classFeatures = (
      <>
        <h3>Class Features</h3>
        <p>Hit Points at 1st Level: 10 + your Constitution modifier</p>
        <p className="underline">Proficiency</p>
        <ul>
          <li className="profskills">{fighterSkill1}</li>
          <li className="profskills">{fighterSkill2}</li>
        </ul>
        <p className="underline">Fighting style</p>
        <p>
          You adopt a particular style of fighting as your specialty. Choose one of the following
          options. You can’t take a Fighting Style option more than once, even if you later get to
          choose again.
        </p>
        <ul>
          <li>{fighterStyle}</li>
        </ul>
        <p className="underline">Second wind</p>
        <p>
          You have a limited well of stamina that you can draw on to protect yourself from harm. On
          your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter
          level. Once you use this feature, you must finish a short or long rest before you can use
          it again.
        </p>
      </>
    );
  } else if (playerClass === "Ranger") {
    classFeatures = (
      <>
        <h3>Class Features</h3>
        <p>Hit Points at 1st Level: 8 + your Constitution modifier</p>
        <p className="underline">Proficiency</p>
        <ul>
          <li className="profskills">{rangerSkill1}</li>
          <li className="profskills">{rangerSkill2}</li>
          <li className="profskills">{rangerSkill3}</li>
        </ul>
        <p className="underline">Favored Enemy</p>
        <p>
          Beginning at 1st level, you have significant experience studying, tracking, hunting, and
          even talking to a certain type of enemy.
        </p>
        <ul>
          <li>{favoredEnemy}</li>
        </ul>
        <p className="underline">Language</p>
        <ul>
          <li>{rangerlang}</li>
        </ul>
        <p className="underline">Natural Explorer</p>
        <p>
          You are particularly familiar with one type of natural environment and are adept at
          traveling and surviving in such regions.
        </p>
        <ul>
          <li>{naturalExplorer}</li>
        </ul>
      </>
    );
  } else if (playerClass === "Rogue") {
    classFeatures = (
      <>
        <h3>Class Features</h3>
        <p>Hit Points at 1st Level: 8 + your Constitution modifier</p>
        <p className="underline">Proficiency</p>
        <ul>
          <li className="profskills">{rogueSkill1}</li>
          <li className="profskills">{rogueSkill2}</li>
          <li className="profskills">{rogueSkill3}</li>
          <li className="profskills">{rogueSkill4}</li>
        </ul>
        <p className="underline">Expertise</p>
        <p>
          Your proficiency bonus is doubled for any ability check you make that uses either of the
          chosen proficiencies.
        </p>
        <ul>
          <li>{expertise1}</li>
          <li>{expertise2}</li>
        </ul>
        <p className="underline">Sneak Attack</p>
        <p>
          Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction.
          Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if
          you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.
        </p>
        <p className="underline">Thieve's Cant</p>
        <p>
          During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and
          code that allows you to hide messages in seemingly normal conversation. Only another
          creature that knows thieves’ cant understands such messages. It takes four times longer to
          convey such a message than it does to speak the same idea plainly.
        </p>
      </>
    );
  }
  if (playerClass === "Sorcerer") {
    classFeatures = (
      <>
        <h3>Class Features</h3>
        <p>Hit Points at 1st Level: 6 + your Constitution modifier</p>
        <p className="underline">Proficiency</p>
        <ul>
          <li className="profskills">{sorcereSkill1}</li>
          <li className="profskills">{sorcereSkill2}</li>
        </ul>
        <p className="underline">Spellcasting</p>
        <p>
          An event in your past, or in the life of a parent or ancestor, left an indelible mark on
          you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your
          spells.
        </p>
        <p className="underline">Cantrips</p>
        <p>
          At 1st level, you know four cantrips of your choice from the sorcerer spell list. You
          learn additional sorcerer cantrips of your choice at higher levels, as shown in the
          Cantrips Known column of the Sorcerer table.
        </p>
        <p className="underline">Spell Slots</p>
        <p>
          The Sorcerer table shows how many spell slots you have to cast your sorcerer spells of 1st
          level and higher. To cast one of these sorcerer spells, you must expend a slot of the
          spell’s level or higher. You regain all expended spell slots when you finish a long rest.
        </p>
        <p>Spell save DC = 8 + your proficiency bonus + your Charisma modifier</p>
        <p>Spell attack modifier = your proficiency bonus + your Charisma modifier</p>
      </>
    );
  }

  return <div className="class-features white">{classFeatures}</div>;
};

export default ClassFeature;
