import React, { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactSwitch from "react-switch";

import LandingPage from "./Pages/LandingPage";

import "../src/assets/scss/style.scss";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    console.log("asdasd");
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`} id={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={LandingPage} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
