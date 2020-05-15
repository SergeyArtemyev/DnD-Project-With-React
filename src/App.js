import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import CreateCharacter from "./components/pages/CreateCharacter";
import RaceState from "./context/Race/RaceState";
import ClassState from "./context/Class/ClassState";
import BackgroundState from "./context/Background/BackgroundState";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Initialize Material JS
    M.AutoInit();
  });

  return (
    <RaceState>
      <ClassState>
        <BackgroundState>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/create-character" component={CreateCharacter}></Route>
            </Switch>
            <Footer />
          </Router>
        </BackgroundState>
      </ClassState>
    </RaceState>
  );
};

export default App;
