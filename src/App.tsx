import React, { useEffect } from "react";
import Router from "components/Router/Router";
import "./App.less";
import { hot } from "react-hot-loader";
import ReactGa from "react-ga";

const App = () => {

  useEffect(() => {
    // Initializing portfolio track GA
    ReactGa.initialize('UA-173447041-1');

    ReactGa.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <React.Fragment>
      <Router />
    </React.Fragment>
  );
};

export default process.env.NODE_ENV === "development" ? hot(module)(App) : App;
