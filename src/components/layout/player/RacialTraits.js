import React, { useContext, useEffect } from "react";
import PlayerContext from "../../../context/Player/playerContext";

const RacialTraits = () => {
  const playerContext = useContext(PlayerContext);

  useEffect(() => {
    getCharData();
    // eslint-disable-next-line
  }, []);

  const {
    playerData: { race, humanExtraLang, elfExtraLang, cantrip, toolProf },
    getCharData,
  } = playerContext;

  let racialTraits;
  if (race === "Human") {
    racialTraits = (
      <>
        <h3>Racial Traits</h3>
        <p>+1 to All Ability Scores</p>
        <p className="main-color underline">Languages</p>
        <p>You can speak, read, and write Common and one extra language.</p>
        <ul className="browser-default">
          <li>{humanExtraLang}</li>
        </ul>
      </>
    );
  }
  if (race === "Elf") {
    racialTraits = (
      <>
        <h3>Racial Traits</h3>
        <p>+2 Dexterity</p>
        <p className="main-color underline">Darkvision</p>
        <p>
          Accustomed to twilit forests and the night sky, you have superior vision in dark and dim
          conditions
        </p>
        <p className="main-color underline">Keen Senses</p>
        <p>You have proficiency in the Perception skill.</p>
        <p className="main-color underline">Fey Ancestry</p>
        <p>
          You have advantage on saving throws against being charmed, and magic can’t put you to
          sleep.
        </p>
        <p className="main-color underline">Trance</p>
        <p>
          Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4
          hours a day.
        </p>
        <p className="main-color underline">Cantrip</p>
        <p>
          You know one cantrip of your choice from the wizard spell list. Intelligence is your
          spellcasting ability for it.
        </p>
        <ul className="browser-default">
          <li>{cantrip}</li>
        </ul>
        <p>You can speak, read, and write one extra language of your choice.</p>
        <ul className="browser-default">
          <li>{elfExtraLang}</li>
        </ul>
      </>
    );
  }
  if (race === "Halfling") {
    racialTraits = (
      <>
        <h3>Racial Traits</h3>
        <p>+2 Dexterity</p>
        <p className="main-color underline">Lucky</p>
        <p>
          When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can
          reroll the die and must use the new roll.
        </p>
        <p className="main-color underline">Brave</p>
        <p>You have advantage on saving throws against being frightened.</p>
        <p className="main-color underline">Halfling Nimbleness</p>
        <p>You can move through the space of any creature that is of a size larger than yours.</p>
      </>
    );
  }
  if (race === "Dwarf") {
    racialTraits = (
      <>
        <h3>Racial Traits</h3>
        <p>+2 Constitution</p>
        <p className="main-color underline">Darkvision</p>
        <p>Accustomed to life underground, you have superior vision in dark and dim conditions.</p>
        <p className="main-color underline">Dwarven Resilience</p>
        <p>
          You have advantage on saving throws against poison, and you have resistance against poison
          damage
        </p>
        <p className="main-color underline">Tool Proficiency</p>
        <p>
          You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s
          supplies, or mason’s tools.
        </p>
        <ul className="browser-default">
          <li>{toolProf}</li>
        </ul>
        <p className="main-color underline">Dwarven Combat Training</p>
        <p>You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.</p>
        <p className="main-color underline">Stonecunning</p>
        <p>
          Whenever you make an Intelligence (History) check related to the origin of stonework, you
          are considered proficient in the History skill and add double your proficiency bonus to
          the check, instead of your normal proficiency bonus.
        </p>
      </>
    );
  }

  return <div>{racialTraits}</div>;
};

export default RacialTraits;
