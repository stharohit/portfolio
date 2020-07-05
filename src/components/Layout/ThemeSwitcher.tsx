import React, { useState, useEffect } from "react";
import darkVars from "dark.json";
import lightVars from "light.json";
import { Switch } from "antd";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { themeChanger } from "utils/themeConfig";

interface Props {}

const ThemeSwitcher = (props: Props) => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme-mode") || "light"
  );

  useEffect(() => {
    const setThemeMode = () => {
      let getCurrentVariables = localStorage.getItem("app-theme");
      if (getCurrentVariables) {
        themeChanger(Object.assign({}, JSON.parse(getCurrentVariables)));
      }
    };
    setThemeMode();
  }, [themeMode]);

  const handleTheme = () => {
    if (themeMode === "dark") {
      let changedTheme = themeChanger(lightVars);
      if (changedTheme) {
        localStorage.setItem("theme-mode", "light");
        localStorage.setItem("app-theme", JSON.stringify(lightVars));
        setThemeMode("light");
      }
    } else {
      let changedTheme = themeChanger(lightVars);
      if (changedTheme) {
        localStorage.setItem("theme-mode", "dark");
        localStorage.setItem("app-theme", JSON.stringify(darkVars));
        setThemeMode("dark");
      }
    }
  };
  return (
    <React.Fragment>
      <IoMdSunny
        className={`lightmode ${themeMode === "light" ? "active" : ""}`}
      />
      <Switch
        onChange={handleTheme}
        checked={themeMode === "dark" ? true : false}
      />
      <IoMdMoon
        className={`lightmode ${themeMode === "dark" ? "active" : ""}`}
      />
    </React.Fragment>
  );
};

export default ThemeSwitcher;
