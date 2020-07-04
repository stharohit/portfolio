import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "view/Home/Home";
import About from "view/About/About";

interface Props {}

const Router = (props: Props) => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default Router;
