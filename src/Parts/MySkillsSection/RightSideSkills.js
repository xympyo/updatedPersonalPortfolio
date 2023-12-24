import React from "react";

import HTML5Icon from "../../assets/images/HTML5Icon.svg";
import CSS3Icon from "../../assets/images/CSS3Icon.svg";
import JavaScriptIcon from "../../assets/images/JavaScriptIcon.svg";
import ReactJSIcon from "../../assets/images/ReactJSIcon.svg";
import BootstrapIcon from "../../assets/images/BootstrapIcon.svg";
import GitHubIcon from "../../assets/images/GitHubIcon.svg";

export default function RightSideSkills() {
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-end">
        <div style={{ margin: "20px 0px 0px 0px" }}>
          <h1
            className="text-start text-lg-end"
            style={{ fontSize: "24px", fontWeight: "500", textAlign: "right" }}
          >
            Web Development Skills
          </h1>
        </div>
        <div
          className="d-flex flex-row align-items-center"
          style={{ margin: "12px 0px 0px 0px" }}
        >
          <img src={HTML5Icon} alt="HTML5 Icon" />
          <div className="d-flex flex-column">
            <div style={{ margin: "0px 0px 0px 12px" }}>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  margin: "0px",
                }}
              >
                HTML 5{" "}
              </h1>
              <p style={{ margin: "0px" }}>
                Around 3 year of Indepth Experience with HTML.
              </p>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-row align-items-center"
          style={{ margin: "12px 0px 0px 0px" }}
        >
          <img src={CSS3Icon} alt="CSS3 Icon" />
          <div className="d-flex flex-column">
            <div style={{ margin: "0px 0px 0px 12px" }}>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  margin: "0px",
                }}
              >
                CSS 3
              </h1>
              <p style={{ margin: "0px" }}>
                Around 2.5 year of Experience with CSS 3, like it when I
                understand it.
              </p>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-row align-items-center"
          style={{ margin: "12px 0px 0px 0px" }}
        >
          <img src={JavaScriptIcon} alt="JavaScript Icon" />
          <div className="d-flex flex-column">
            <div style={{ margin: "0px 0px 0px 12px" }}>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  margin: "0px",
                }}
              >
                JavaScript
              </h1>
              <p style={{ margin: "0px" }}>
                Around 1 year of Experience with JavaScript, did not really go
                so deeply to it, honestly not a big fan of it.
              </p>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-row align-items-center"
          style={{ margin: "12px 0px 0px 0px" }}
        >
          <img src={ReactJSIcon} alt="ReactJS Icon" />
          <div className="d-flex flex-column">
            <div style={{ margin: "0px 0px 0px 12px" }}>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  margin: "0px",
                }}
              >
                React JS
              </h1>
              <p style={{ margin: "0px" }}>
                Around 1 year of Experience with ReactJS, like it a lot, but not
                so used to it.
              </p>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-row align-items-center"
          style={{ margin: "12px 0px 0px 0px" }}
        >
          <img src={BootstrapIcon} alt="Bootstrap Icon" />
          <div className="d-flex flex-column">
            <div style={{ margin: "0px 0px 0px 12px" }}>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  margin: "0px",
                }}
              >
                JavaScript
              </h1>
              <p style={{ margin: "0px" }}>
                Around 1 year of Experience with Bootstrap, like it a lot, makes
                things easier, harder when your new.
              </p>
            </div>
          </div>
        </div>
        <div style={{ margin: "20px 0px 0px 0px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "500" }}>GitHub Skills</h1>
        </div>
        <div
          className="d-flex flex-row align-items-center"
          style={{ margin: "12px 0px 0px 0px" }}
        >
          <img src={GitHubIcon} alt="GitHub Icon" />
          <div className="d-flex flex-column">
            <div style={{ margin: "0px 0px 0px 12px" }}>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  margin: "0px",
                }}
              >
                GitHub
              </h1>
              <p style={{ margin: "0px" }}>
                Been using GitHub for the last 1 year of just Commit and Push,
                sometimes Clone, able to operate with Git Desktop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
