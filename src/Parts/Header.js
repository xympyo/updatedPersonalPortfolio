import React, { useState, useContext } from "react";
import { ThemeContext } from "../App";

import IconToggle from "./HeaderPart/IconToggle";
import LogoName from "./HeaderPart/LogoName";
import Navbar from "./HeaderPart/Navbar";
import { Fade } from "react-reveal";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [isLightMode, setIsLightMode] = useState(true);
  const handleModeToggle = () => {
    setIsLightMode(!isLightMode);
  };
  return (
    <div className="container">
      <Fade>
        <div
          className="row d-flex align-items-center"
          style={{ paddingTop: "20px" }}
        >
          <div className="col-lg-4 col-sm-6">
            <IconToggle
              isLightMode={theme === "light"}
              toggleTheme={toggleTheme}
            />
          </div>
          <div className="col-lg-4 col-sm-6 d-flex align-items-center justify-content-center">
            <LogoName />
          </div>
          <div className="col-lg-4 col-sm-0">
            <Navbar />
          </div>
        </div>
        <hr />
      </Fade>
    </div>
  );
}
