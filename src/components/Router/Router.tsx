import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "view/Home/Home";
import About from "view/About/About";
import GetInTouch from "view/Contact/GetInTouch";
import Biography from "view/Biography/Biography";
import Projects from "view/Projects/Projects";

interface Props {}

const Router = (props: Props) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/biography">
        <Biography />
      </Route>
      <Route path="/my-projects">
        <Projects />
      </Route>
      <Route path="/contact-me">
        <GetInTouch />
      </Route>
    </Switch>
  );
};

export default Router;
