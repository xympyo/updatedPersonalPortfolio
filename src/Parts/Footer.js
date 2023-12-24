import React from "react";
import { Fade } from "react-reveal";

import GitHubNegative from "../assets/images/GitHubNegativeIcon.svg";
import GitHubPositive from "../assets/images/GitHubPositiveIcon.svg";
import InstagramPositive from "../assets/images/InstagramPositiveIcon.svg";
import InstagramNegative from "../assets/images/InstagramNegativeIcon.svg";
import LinkedInIcon from "../assets/images/LinkedInIcon.svg";
import WhatsAppIcon from "../assets/images/WhatsAppIcon.svg";

import LogoName from "./HeaderPart/LogoName";

export default function Footer() {
  return (
    <div className="container">
      <hr style={{ marginTop: "60px" }} />
      <div className="row" style={{ paddingBottom: "20px" }}>
        <div className="col-lg-4 col-sm-12 d-flex justify-content-center justify-content-lg-start">
          <Fade>
            <div className="">
              <p>Moshe Dayan ©</p>
            </div>
          </Fade>
        </div>

        <div className="col-lg-4 col-sm-12">
          <Fade>
            <div className="d-flex justify-content-center align-items-center">
              <LogoName />
            </div>
          </Fade>
        </div>
        <div className="col-lg-2 col-sm-0"></div>
        <div className="col-lg-2 col-sm-12">
          <Fade>
            <div className="d-flex justify-content-evenly justify-content-lg-between">
              <a type="link" target="_blank" href="https://wa.me/6285939640536">
                <img className="wa img-fluid" src={WhatsAppIcon} />
              </a>
              <a type="link" target="_blank" href="https://github.com/xympyo">
                <img className="git-lg img-fluid" src={GitHubPositive} />
              </a>
              <a type="link" target="_blank" href="https://github.com/xympyo">
                <img className="git-dk img-fluid" src={GitHubNegative} />
              </a>
              <a
                type="link"
                target="_blank"
                href="https://www.instagram.com/moshe_dyn/"
              >
                <img className="ig-lg img-fluid" src={InstagramPositive} />
              </a>
              <a
                type="link"
                target="_blank"
                href="https://www.instagram.com/moshe_dyn/"
              >
                <img className="ig-dk img-fluid" src={InstagramNegative} />
              </a>
              <a
                type="link"
                target="_blank"
                href="https://www.linkedin.com/in/moshedayan/"
              >
                <img className="linkedin img-fluid" src={LinkedInIcon} />
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
