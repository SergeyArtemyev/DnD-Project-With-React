import React from "react";
import Race from "../layout/createCharacter/race/Race";
import Class from "../layout/createCharacter/class/Class";
import Abilities from "../layout/createCharacter/abilities/Abilities";
import Description from "../layout/createCharacter/description/Description";
import Equipment from "../layout/createCharacter/equipment/Equipment";

const CreateCharacter = () => {
  function next() {
    // находить элемент с актив и жать клин на слекдующий элемент
    document.querySelector(".test").click();
  }
  return (
    <section id="char-create">
      <div className="container">
        <h4 className="center-align">Welcome to the character creation page</h4>
        <div className="main-window">
          <form id="creation-form">
            <div className="row">
              <div className="col s12">
                <ul className="tabs">
                  <li className="tab col s2  offset-s1">
                    <a className="active" href="#test1">
                      Race
                    </a>
                  </li>
                  <li className="tab col s2">
                    <a href="#test2">Class</a>
                  </li>
                  <li className="tab col s2">
                    <a className="test" href="#test3">
                      Ability
                    </a>
                  </li>
                  <li className="tab col s2">
                    <a href="#test4">Description</a>
                  </li>
                  <li className="tab col s2">
                    <a href="#test5">Equipment</a>
                  </li>
                </ul>
              </div>
              <div id="test1" className="col s12">
                <Race />
              </div>
              <div id="test2" className="col s12">
                <Class />
              </div>
              <div id="test3" className="col s12">
                <Abilities />
              </div>
              <div id="test4" className="col s12">
                <Description />
              </div>
              <div id="test5" className="col s12">
                <Equipment />
              </div>
            </div>
          </form>
          <button id="btn" onClick={next}>
            next
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreateCharacter;
