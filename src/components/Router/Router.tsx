import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "view/Home/Home";
import About from "view/About/About";

// const Home = lazy(() => import("view/Home/Home"));
// const About = lazy(() => import("view/About/About"));

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
    </Switch>
  );
};

export default Router;
