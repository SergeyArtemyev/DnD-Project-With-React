import React, { useContext, useEffect } from "react";
import ClassContext from "../../../../context/Class/classContext";
import M from "materialize-css/dist/js/materialize.min.js";
import FighterStyle from "../../../selects/FighterStyle";
import FighterSkill from "../../../selects/FighterSkill";
import FavoredEnemy from "../../../selects/FavoredEnemy";
import RangerLang from "../../../selects/RangerLang";
import NaturalExp from "../../../selects/NaturalExp";
import RangerSkill from "../../../selects/RangerSkill";
import Expertise from "../../../selects/Expertise";
import RogueSkill from "../../../selects/RogueSkill";
import SorcererSkill from "../../../selects/SorcererSkill";

const ClassDescription = () => {
  const classContext = useContext(ClassContext);

  const {
    className,
    description: {
      info,
      hitDice,
      hitAtFirstLvl,
      hitAtHigherLvl,
      profArmor,
      profWeapons,
      profTool,
      savingThrow,
      skills,
      fightStyle,
      secondWind,
      favoredEnemy,
      naturalExplorer,
      expertise,
      sneakAttack,
      thiefCant,
      spellInfo,
      cantrips,
      spellSlots,
      spellSaveDc,
      spellAttackMod,
    },
  } = classContext;

  useEffect(() => {
    // Initialize Material JS
    M.AutoInit();
  });

  const changeArrow = (e) => {
    let iconArrow = document.querySelectorAll(".icon-arrow");
    let lis = document.querySelectorAll(".desc-li");
    for (let i = 0; i < lis.length; i++) {
      if (e.target.parentElement === lis[i] || e.target.parentElement.parentElement === lis[i]) {
        if (iconArrow[i].innerHTML === "arrow_downward") {
          iconArrow[i].innerHTML = "arrow_upward";
        } else {
          iconArrow[i].innerHTML = "arrow_downward";
        }
      }
    }
  };

  let fighterDesc;
  let rangerDesc;
  let rogueDesc;
  let sorcererDesc;
  let profSelect;
  if (className === "Fighter") {
    let fightStyleSelect = (
      <>
        <FighterStyle />
      </>
    );
    fighterDesc = (
      <>
        <li className="desc-li">
          <div className="collapsible-header" onClick={changeArrow}>
            <span>Fighting Style</span>
            <span className="new badge" data-badge-caption="choose options"></span>
            <i className="material-icons icon-arrow">arrow_downward</i>
          </div>
          <div className="collapsible-body">
            <p>{fightStyle}</p>
            <p>{fightStyleSelect}</p>
          </div>
        </li>
        <li className="desc-li">
          <div className="collapsible-header" onClick={changeArrow}>
            <span>Second Wind</span>
            <i className="material-icons icon-arrow">arrow_downward</i>
          </div>
          <div className="collapsible-body">
            <p>{secondWind}</p>
          </div>
        </li>
      </>
    );
    profSelect = (
      <>
        <FighterSkill />
      </>
    );
  } else if (className === "Ranger") {
    let favEnemySelect = (
      <>
        <FavoredEnemy />
        <br />
        <RangerLang />
      </>
    );
    let naturExpSelect = (
      <>
        <NaturalExp />
      </>
    );
    rangerDesc = (
      <>
        <li className="desc-li">
          <div className="collapsible-header" onClick={changeArrow}>
            <span>Favored Enemy</span>
            <span className="new badge" data-badge-caption="choose options"></span>
            <i className="material-icons icon-arrow">arrow_downward</i>
          </div>
          <div className="collapsible-body">
            <p>{favoredEnemy}</p>
            <p>{favEnemySelect}</p>
          </div>
        </li>
        <li className="desc-li">
          <div className="collapsible-header" onClick={changeArrow}>
            <span>Natural Explorer</span>
            <span className="new badge" data-badge-caption="choose options"></span>
            <i className="material-icons icon-arrow">arrow_downward</i>
          </div>
          <div className="collapsible-body">
            <p>{naturalExplorer}</p>
            <p>{naturExpSelect}</p>
          </div>
        </li>
      </>
    );
    profSelect = (
      <>
        <RangerSkill />
      </>
    );
  } else if (className === "Rogue") {
    let expertiseSelect = (
      <>
        <Expertise />
      </>
    );
    rogueDesc = (
      <>
        <li className="desc-li">
          <div className="collapsible-header" onClick={changeArrow}>
            <span>Expertise</span>
            <span className="new badge" data-badge-caption="choose options"></span>
            <i className="material-icons icon-arrow">arrow_downward</i>
          </div>
          <div className="collapsible-body">
            <p>{expertise}</p>
            <p>{expertiseSelect}</p>
          </div>
        </li>
        <li className="desc-li">
          <div className="collapsible-header" onClick={changeArrow}>
            <span>Sneak Attack</span>
            <i className="material-icons icon-arrow">arrow_downward</i>
          </div>
          <div className="collapsible-body">
            <p>{sneakAttack}</p>
          </div>
        </li>
        <li className="desc-li">
          <div className="collapsible-header" onClick={changeArrow}>
            <span>Thieves' Cant</span>
            <i className="material-icons icon-arrow">arrow_downward</i>
          </div>
          <div className="collapsible-body">
            <p>{thiefCant}</p>
          </div>
        </li>
      </>
    );
    profSelect = (
      <>
        <RogueSkill />
      </>
    );
  } else if (className === "Sorcerer") {
    sorcererDesc = (
      <>
        <li className="desc-li">
          <div className="collapsible-header" onClick={changeArrow}>
            <span>Spellcasting</span>
            <i className="material-icons icon-arrow">arrow_downward</i>
          </div>
          <div className="collapsible-body">
            <p>{spellInfo}</p>
            <span>Cantrip</span>
            <p>{cantrips}</p>
            <span>Spell Slot</span>
            <p>{spellSlots}</p>
            <span>Spell Save DC</span>
            <p>{spellSaveDc}</p>
            <span>Spell Attack Modifier</span>
            <p>{spellAttackMod}</p>
          </div>
        </li>
      </>
    );
    profSelect = (
      <>
        <SorcererSkill />
      </>
    );
  }

  return (
    <div className="description">
      <h3>Description</h3>
      <p>{info}</p>
      <ul className="collapsible expandable">
        <li className="desc-li">
          <div className="collapsible-header" onClick={changeArrow}>
            <span>Hit Points</span>
            <i className="material-icons icon-arrow">arrow_downward</i>
          </div>
          <div className="collapsible-body">
            <p>
              <span className="main-color underline">Hit Dice:</span> {hitDice}
            </p>
            <p>
              <span className="main-color underline">Hit Points at 1st Level:</span> {hitAtFirstLvl}
            </p>
            <p>
              <span className="main-color underline">Hit Points at Higher Levels:</span>{" "}
              {hitAtHigherLvl}
            </p>
          </div>
        </li>
        <li className="desc-li">
          <div className="collapsible-header" onClick={changeArrow}>
            <span>Proficiences</span>
            <span className="new badge" data-badge-caption="choose options"></span>
            <i className="material-icons icon-arrow">arrow_downward</i>
          </div>
          <div className="collapsible-body">
            <p>
              <span className="main-color underline">Armor:</span> {profArmor}
            </p>
            <p>
              <span className="main-color underline">Weapons:</span> {profWeapons}
            </p>
            <p>
              <span className="main-color underline">Tools:</span> {profTool}
            </p>
            <p>
              <span className="main-color underline">Saving Throws:</span> {savingThrow}
            </p>
            <p>
              <span className="main-color underline">Skills:</span> {skills}
            </p>
            <p>{profSelect}</p>
          </div>
        </li>
        {className === "Fighter" ? fighterDesc : null}
        {className === "Ranger" ? rangerDesc : null}
        {className === "Rogue" ? rogueDesc : null}
        {className === "Sorcerer" ? sorcererDesc : null}
      </ul>
    </div>
  );
};

export default ClassDescription;
