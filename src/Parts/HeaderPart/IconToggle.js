import React, { useContext } from "react";
import { ThemeContext } from "../../App";

import LightIcon from "../../assets/images/LightModeIcon.svg";
import DarkIcon from "../../assets/images/DarkModeIcon.svg";

export default function IconToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <div>
      <a href="#" onClick={handleToggle}>
        {theme === "light" ? (
          <img
            className="lightIcon img-fluid"
            src={LightIcon}
            alt="Light Mode"
          />
        ) : (
          <img className="darkIcon img-fluid" src={DarkIcon} alt="Dark Mode" />
        )}
      </a>
    </div>
  );
}
