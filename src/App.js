import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import CreateCharacter from "./components/pages/CreateCharacter";
import Player from "./components/pages/Player";
import RaceState from "./context/Race/RaceState";
import ClassState from "./context/Class/ClassState";
import BackgroundState from "./context/Background/BackgroundState";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import PlayerState from "./context/Player/PlayerState";

const App = () => {
  useEffect(() => {
    // Initialize Material JS
    M.AutoInit();
  });

  return (
    <PlayerState>
      <RaceState>
        <ClassState>
          <BackgroundState>
            <Router>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/create-character" component={CreateCharacter}></Route>
                <Route exact path="/player" component={Player}></Route>
              </Switch>
              <Footer />
            </Router>
          </BackgroundState>
        </ClassState>
      </RaceState>
    </PlayerState>
  );
};

export default App;
