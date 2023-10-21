import React from "react";
import { Fade } from "react-reveal";

import HeroText from "./HeroPart/HeroText";
import HeroImage from "./HeroPart/HeroImage";

export default function Hero() {
  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <Fade>
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 col-sm-12">
            <HeroText />
          </div>
          <div className="col-lg-6 col-sm-12">
            <HeroImage />
          </div>
        </div>
      </Fade>
    </div>
  );
}
