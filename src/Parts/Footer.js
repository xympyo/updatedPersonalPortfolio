import React from "react";
import LogoName from "./HeaderPart/LogoName";

import { Fade } from "react-reveal";

export default function Footer() {
  return (
    <div className="container">
      <Fade>
        <hr style={{ marginTop: "60px" }} />
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ paddingBottom: "20px" }}
        >
          <LogoName />
        </div>
      </Fade>
    </div>
  );
}
