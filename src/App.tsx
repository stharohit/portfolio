import React from "react";
import Router from "components/Router/Router";
import "./App.less";
import { hot } from "react-hot-loader";

const App = () => {
  return (
    <React.Fragment>
      <Router />
    </React.Fragment>
  );
};

export default process.env.NODE_ENV === "development" ? hot(module)(App) : App;
