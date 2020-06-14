import React, { useEffect, useContext } from "react";
import Race from "../layout/createCharacter/race/Race";
import Class from "../layout/createCharacter/class/Class";
import Abilities from "../layout/createCharacter/abilities/Abilities";
import Description from "../layout/createCharacter/description/Description";
import Equipment from "../layout/createCharacter/equipment/Equipment";
import PlayerContext from "../../context/Player/playerContext";

const CreateCharacter = () => {
  const playerContext = useContext(PlayerContext);
  const { addPlayer } = playerContext;

  useEffect(() => {
    let prev = document.querySelector(".prev");
    prev.style.display = "none";
  });

  function prev() {
    let links = document.querySelector(".tabs").getElementsByTagName("a");
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");
    let submit = document.querySelector("button[type='submit'");
    for (let i = 0; i < links.length; i++) {
      if (i > 0) {
        prev.style.marginRight = "unset";
        submit.style.display = "none";
      }
      if (i === 1) {
        prev.style.display = "none";
      } else {
        next.style.display = "inline-block";
        prev.style.display = "inline-block";
      }
      if (links[i].classList.contains("active")) {
        links[i].classList.remove("active");
        links[i - 1].click();
        break;
      }
    }
  }
  function next() {
    let links = document.querySelector(".tabs").getElementsByTagName("a");
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");
    let submit = document.querySelector("button[type='submit'");

    for (let i = 0; i < links.length; i++) {
      if (i === links.length - 2) {
        prev.style.marginRight = "92px";
      }
      if (links[i].classList.contains("active")) {
        if (i === 3) {
          next.style.display = "none";
          submit.style.display = "inline-block";
        } else {
          next.style.display = "inline-block";
          prev.style.display = "inline-block";
        }
        links[i].classList.remove("active");
        links[i + 1].click();
        break;
      }
    }
  }
  const onSubmit = (e) => {
    e.preventDefault();
    let formElem = document.querySelector("form");
    formElem.addEventListener("formdata", async (e) => {
      let words = [];
      let data = e.formData;
      for (let pair of data.entries()) {
        words.push([pair[0], pair[1]]);
      }
      data = Object.fromEntries(words);
      data = JSON.stringify(data);
      await addPlayer(data);
      window.location = "/player";
    });
    new FormData(formElem);
  };

  return (
    <section id="char-create">
      <div className="container">
        <h4 className="center-align create-header">Welcome to the character creation page</h4>
        <div className="main-window">
          <form id="creation-form" onSubmit={onSubmit}>
            <div className="row">
              <div className="col s12">
                <ul className="tabs">
                  <li className="tab col s2 offset-s1">
                    <a className="active" href="#test1">
                      Race
                    </a>
                  </li>
                  <li className="tab col s2">
                    <a href="#test2">Class</a>
                  </li>
                  <li className="tab col s2">
                    <a href="#test3">Ability</a>
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
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
          <div className="form-btns">
            <button className="prev" onClick={prev}>
              <i className="material-icons">arrow_back</i> <span>Prev</span>
            </button>
            <button className="next" onClick={next}>
              <span>Next</span> <i className="material-icons">arrow_forward</i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateCharacter;
