import React from "react";
import { Fade } from "react-reveal";

import HeroImageLg from "../assets/images/LightModeImage.png";
import HeroImageDk from "../assets/images/DarkModeImage.png";

export default function AboutMe() {
  return (
    <div className="container">
      <div style={{ marginTop: "80px" }}>
        <Fade>
          <div className="row">
            <div className="col"></div>
            <div className="col-lg-4 col-sm-6">
              <img
                className="aboutImgLg img-fluid"
                src={HeroImageLg}
                alt="a Picture of Moshe Dayan"
              />
              <img
                className="aboutImgDk img-fluid"
                src={HeroImageDk}
                alt="a Picture of Moshe Dayan"
              />
            </div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col-lg-4 col-sm-5">
              <p
                style={{
                  marginTop: "0px",
                  fontSize: "24px",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Get To Know Me!
              </p>
            </div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col-lg-8 col-sm-10">
              <p
                style={{
                  marginTop: "12px",
                  fontSize: "24px",
                  fontWeight: "400",
                }}
              >
                Moshe is an Informatics undergraduate from President University,
                thrives to learn more and is interested a lot on Technology.
                Thanks to Self-Taught learning, he's able to excel Front-End
                Development, and is decent at Graphic Designs. He's a great
                choice to work with a team, understanding others esp.
              </p>
            </div>
            <div className="col"></div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
