import React from "react";

import LightHero from "../../assets/images/LightModeImage.png";
import DarkHero from "../../assets/images/DarkModeImage.png";

export default function HeroImage() {
  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <img src={LightHero} className="heroImageLg img-fluid" />
        <img src={DarkHero} className="heroImageDk img-fluid" />
      </div>
    </div>
  );
}
