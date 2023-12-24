import React from "react";

import LightHero from "../../assets/images/LightModeImage.png";
import DarkHero from "../../assets/images/DarkModeImage.png";

export default function HeroImage() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center justify-content-lg-end mt-5 mt-lg-0">
        <img src={LightHero} className="heroImageLg img-fluid" alt="a Photo of Moshe"/>
        <img src={DarkHero} className="heroImageDk img-fluid" alt="a Photo of Moshe"/>
      </div>
    </div>
  );
}
