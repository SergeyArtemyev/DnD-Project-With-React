import React, { useContext, useEffect } from "react";
import ClassContext from "../../../../context/Class/classContext";
import M from "materialize-css/dist/js/materialize.min.js";

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
        <select name="fighter-style" className="browser-default">
          <option value="none">- Choose an Option -</option>
          <option value="Archery">Archery</option>
          <option value="Defence">Defence</option>
          <option value="Dueling">Dueling</option>
          <option value="Great Weapon Fighting">Great Weapon Fighting</option>
          <option value="Protection">Protection</option>
          <option value="Two-Weapon Fighting">Two-Weapon Fighting</option>
        </select>
      </>
    );
    fighterDesc = (
      <>
        <li className="desc-li">
          <div className="collapsible-header" onClick={changeArrow}>
            <span>Fighting Style</span>
            <span class="new badge" data-badge-caption="choose options"></span>
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
        <select name="fighter-skill-1" className="browser-default">
          <option value="none">- Choose a Fighter Skill -</option>
          <option value="Acrobatics">Acrobatics</option>
          <option value="Animal Handling">Animal Handling</option>
          <option value="Athletics">Athletics</option>
          <option value="History">History</option>
          <option value="Insight">Insight</option>
          <option value="Intimidation">Intimidation</option>
          <option value="Perception">Perception</option>
          <option value="Survival">Survival</option>
        </select>
        <br />
        <select name="fighter-skill-2" className="browser-default">
          <option value="none">- Choose a Fighter Skill -</option>
          <option value="Acrobatics">Acrobatics</option>
          <option value="Animal Handling">Animal Handling</option>
          <option value="Athletics">Athletics</option>
          <option value="History">History</option>
          <option value="Insight">Insight</option>
          <option value="Intimidation">Intimidation</option>
          <option value="Perception">Perception</option>
          <option value="Survival">Survival</option>
        </select>
      </>
    );
  } else if (className === "Ranger") {
    let favEnemySelect = (
      <>
        <select name="favored-enemy" className="browser-default">
          <option value="none">- Choose an Option -</option>
          <option value="Beasts">Beasts</option>
          <option value="Dragons">Dragons</option>
          <option value="Fey">Fey</option>
          <option value="Giants">Giants</option>
          <option value="Humanoids">Humanoids</option>
          <option value="Undead">Undead</option>
        </select>
        <br />
        <select name="language" className="browser-default">
          <option value="none">- Choose a Language -</option>
          <option value="Abyssal">Abyssal</option>
          <option value="Draconic">Draconic</option>
          <option value="Elvish">Elvish</option>
          <option value="Goblin">Goblin</option>
          <option value="Halfling">Halfling</option>
          <option value="Orc">Orc</option>
        </select>
      </>
    );
    let naturExpSelect = (
      <>
        <select name="natural-explorer" className="browser-default">
          <option value="none">- Choose a Level 1 Option -</option>
          <option value="Arctic">Arctic</option>
          <option value="Coast">Coast</option>
          <option value="Desert">Desert</option>
          <option value="Forest">Forest</option>
          <option value="Mountain">Mountain</option>
          <option value="Swamp">Swamp</option>
        </select>
      </>
    );
    rangerDesc = (
      <>
        <li className="desc-li">
          <div className="collapsible-header" onClick={changeArrow}>
            <span>Favored Enemy</span>
            <span class="new badge" data-badge-caption="choose options"></span>
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
            <span class="new badge" data-badge-caption="choose options"></span>
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
        <select name="ranger-skill-1" className="browser-default">
          <option value="none">- Choose a Ranger Skill -</option>
          <option value="Animal Handling">Animal Handling</option>
          <option value="Athletics">Athletics</option>
          <option value="History">History</option>
          <option value="Insight">Insight</option>
          <option value="Investigation">Investigation</option>
          <option value="Perception">Perception</option>
          <option value="Survival">Survival</option>
          <option value="Stealth">Stealth</option>
        </select>
        <br />
        <select name="ranger-skill-2" className="browser-default">
          <option value="none">- Choose a Ranger Skill -</option>
          <option value="Animal Handling">Animal Handling</option>
          <option value="Athletics">Athletics</option>
          <option value="History">History</option>
          <option value="Insight">Insight</option>
          <option value="Investigation">Investigation</option>
          <option value="Perception">Perception</option>
          <option value="Survival">Survival</option>
          <option value="Stealth">Stealth</option>
        </select>
        <br />
        <select name="ranger-skill-3" className="browser-default">
          <option value="none">- Choose a Ranger Skill -</option>
          <option value="Animal Handling">Animal Handling</option>
          <option value="Athletics">Athletics</option>
          <option value="History">History</option>
          <option value="Insight">Insight</option>
          <option value="Investigation">Investigation</option>
          <option value="Perception">Perception</option>
          <option value="Survival">Survival</option>
          <option value="Stealth">Stealth</option>
        </select>
      </>
    );
  } else if (className === "Rogue") {
    let expertiseSelect = (
      <>
        <select name="expertise-1" className="browser-default">
          <option value="none">- Choose Rouge Expertise -</option>
          <option value="Deception">Deception</option>
          <option value="Stealth">Stealth</option>
          <option value="Thieves' Tools">Thieves' Tools</option>
        </select>
        <br />
        <select name="expertise-2" className="browser-default">
          <option value="none">- Choose Rouge Expertise -</option>
          <option value="Deception">Deception</option>
          <option value="Stealth">Stealth</option>
          <option value="Thieves' Tools">Thieves' Tools</option>
        </select>
      </>
    );
    rogueDesc = (
      <>
        <li className="desc-li">
          <div className="collapsible-header" onClick={changeArrow}>
            <span>Expertise</span>
            <span class="new badge" data-badge-caption="choose options"></span>
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
        <select name="rogue-skill-1" className="browser-default">
          <option value="none">- Choose a rogue Skill -</option>
          <option value="Acrobatics">Acrobatics</option>
          <option value="Athletics">Athletics</option>
          <option value="Deception">Deception</option>
          <option value="Insight">Insight</option>
          <option value="Intimidation">Intimidation</option>
          <option value="Investigation">Investigation</option>
          <option value="Perception">Perception</option>
          <option value="Performance">Performance</option>
          <option value="Persuasion">Persuasion</option>
          <option value="Slight Of Hand">Slight Of Hand</option>
          <option value="Stealth">Stealth</option>
        </select>
        <br />
        <select name="rogue-skill-2" className="browser-default">
          <option value="none">- Choose a rogue Skill -</option>
          <option value="Acrobatics">Acrobatics</option>
          <option value="Athletics">Athletics</option>
          <option value="Deception">Deception</option>
          <option value="Insight">Insight</option>
          <option value="Intimidation">Intimidation</option>
          <option value="Investigation">Investigation</option>
          <option value="Perception">Perception</option>
          <option value="Performance">Performance</option>
          <option value="Persuasion">Persuasion</option>
          <option value="Slight Of Hand">Slight Of Hand</option>
          <option value="Stealth">Stealth</option>
        </select>
        <br />
        <select name="rogue-skill-3" className="browser-default">
          <option value="none">- Choose a rogue Skill -</option>
          <option value="Acrobatics">Acrobatics</option>
          <option value="Athletics">Athletics</option>
          <option value="Deception">Deception</option>
          <option value="Insight">Insight</option>
          <option value="Intimidation">Intimidation</option>
          <option value="Investigation">Investigation</option>
          <option value="Perception">Perception</option>
          <option value="Performance">Performance</option>
          <option value="Persuasion">Persuasion</option>
          <option value="Slight Of Hand">Slight Of Hand</option>
          <option value="Stealth">Stealth</option>
        </select>
        <br />
        <select name="rogue-skill-4" className="browser-default">
          <option value="none">- Choose a rogue Skill -</option>
          <option value="Acrobatics">Acrobatics</option>
          <option value="Athletics">Athletics</option>
          <option value="Deception">Deception</option>
          <option value="Insight">Insight</option>
          <option value="Intimidation">Intimidation</option>
          <option value="Investigation">Investigation</option>
          <option value="Perception">Perception</option>
          <option value="Performance">Performance</option>
          <option value="Persuasion">Persuasion</option>
          <option value="Slight Of Hand">Slight Of Hand</option>
          <option value="Stealth">Stealth</option>
        </select>
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
        <select name="sorcerer-skill-1" className="browser-default">
          <option value="none">- Choose a Sorcerer Skill -</option>
          <option value="Arcana">Arcana</option>
          <option value="Deception">Deception</option>
          <option value="Insight">Insight</option>
          <option value="Intimidation">Intimidation</option>
          <option value="Persuasion">Persuasion</option>
          <option value="Religion">Religion</option>
        </select>
        <br />
        <select name="sorcerer-skill-2" className="browser-default">
          <option value="none">- Choose a Sorcerer Skill -</option>
          <option value="Arcana">Arcana</option>
          <option value="Deception">Deception</option>
          <option value="Insight">Insight</option>
          <option value="Intimidation">Intimidation</option>
          <option value="Persuasion">Persuasion</option>
          <option value="Religion">Religion</option>
        </select>
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
              <span>Hit Dice:</span> {hitDice}
            </p>
            <p>
              <span>Hit Points at 1st Level:</span> {hitAtFirstLvl}
            </p>
            <p>
              <span>Hit Points at Higher Levels:</span> {hitAtHigherLvl}
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
              <span>Armor:</span> {profArmor}
            </p>
            <p>
              <span>Weapons:</span> {profWeapons}
            </p>
            <p>
              <span>Tools:</span> {profTool}
            </p>
            <p>
              <span>Saving Throws:</span> {savingThrow}
            </p>
            <p>
              <span>Skills:</span> {skills}
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
