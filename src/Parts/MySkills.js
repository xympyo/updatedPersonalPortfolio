import React from "react";
import { Fade } from "react-reveal";

import LeftSideSkills from "./MySkillsSection/LeftSideSkills";
import RightSideSkills from "./MySkillsSection/RightSideSkills";

export default function MySkills() {
  return (
    <div
      className="container"
      style={{ marginTop: "60px", marginBottom: "60px"}}
    >
      <div className="row">
        <Fade>
          <div className="d-flex justify-content-center">
            <h1 style={{ fontSize: "26px", fontWeight: "700" }}>My Skills</h1>
          </div>
        </Fade>
        <div className="row">
          <Fade left>
            <div className="col-lg-6 col-sm-12">
              <LeftSideSkills />
            </div>
          </Fade>
          <Fade right>
            <div className="col-lg-6 col-sm-12 d-flex">
              <RightSideSkills />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
