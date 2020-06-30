import React, { useState } from "react";
import Heading from "../layout/player/Heading";
import AbilityPoints from "../layout/player/AbilityPoints";
import Savings from "../layout/player/Savings";
import AcInitSpeed from "../layout/player/AcInitSpeed";
import Features from "../layout/player/Features";
import Skills from "../layout/player/Skills";

const Player = () => {
  const [data, setData] = useState({ array: [] });
  return (
    <section id="character-sheet">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <Heading />
          </div>
        </div>
        <div className="row">
          <div className="col s2">
            <AbilityPoints />
          </div>
          <div className="col s4">
            <div className="prof-bonus">
              <span>+2</span> proficiency bonus
            </div>
            <Savings />
            <Skills data={data} />
          </div>
          <div className="col s6">
            <AcInitSpeed />
            <Features data={data} setData={setData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Player;
