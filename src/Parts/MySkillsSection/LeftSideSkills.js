import React from "react";

import PhotoshopIcon from "../../assets/images/AdobePhotoshopIcon.svg";
import IllustratorIcon from "../../assets/images/AdobeIllustratorIcon.svg";
import CanvaIcon from "../../assets/images/CanvaIcon.svg";
import CorelDrawIcon from "../../assets/images/CorelDrawIcon.svg";
import JavaIcon from "../../assets/images/JavaIcon.svg";

export default function LeftSideSkills() {
  return (
    <div className="container">
      <div className="d-flex flex-column">
        <div style={{ margin: "20px 0px 0px 0px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "500" }}>
            Editing Skills
          </h1>
        </div>
        <div
          className="d-flex flex-row align-items-center"
          style={{ margin: "12px 0px 0px 0px" }}
        >
          <img src={PhotoshopIcon} alt="Photoshop Icon" />
          <div className="d-flex flex-column">
            <div style={{ margin: "0px 0px 0px 12px" }}>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  margin: "0px",
                }}
              >
                Adobe Photoshop
              </h1>
              <p style={{ margin: "0px" }}>
                Around 1 year of Indepth Experience with Photoshop.
              </p>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-row align-items-center"
          style={{ margin: "12px 0px 0px 0px" }}
        >
          <img src={IllustratorIcon} alt="Illustrator Icon" />
          <div className="d-flex flex-column">
            <div style={{ margin: "0px 0px 0px 12px" }}>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  margin: "0px",
                }}
              >
                Adobe Illustrator
              </h1>
              <p style={{ margin: "0px" }}>
                Around 6 months of Experience with Illustrator, helped my dad
                around to create Designs.
              </p>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-row align-items-center"
          style={{ margin: "12px 0px 0px 0px" }}
        >
          <img src={CanvaIcon} alt="Canva Icon" />
          <div className="d-flex flex-column">
            <div style={{ margin: "0px 0px 0px 12px" }}>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  margin: "0px",
                }}
              >
                Canva
              </h1>
              <p style={{ margin: "0px" }}>
                Around 1.5 years of Experience with Canva, started learning
                Designs from this Software.
              </p>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-row align-items-center"
          style={{ margin: "12px 0px 0px 0px" }}
        >
          <img src={CorelDrawIcon} alt="CorelDraw Icon" />
          <div className="d-flex flex-column">
            <div style={{ margin: "0px 0px 0px 12px" }}>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  margin: "0px",
                }}
              >
                Corel Draw
              </h1>
              <p style={{ margin: "0px" }}>
                Around 3 months of Experience with Corel Draw, but I started
                drawing since I was a child.
              </p>
            </div>
          </div>
        </div>
        <div style={{ margin: "20px 0px 0px 0px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "500" }}>
            Programming Skills
          </h1>
        </div>
        <div
          className="d-flex flex-row align-items-center"
          style={{ margin: "12px 0px 0px 0px" }}
        >
          <img src={JavaIcon} className="Java Icon" />
          <div className="d-flex flex-column">
            <div style={{ margin: "0px 0px 0px 12px" }}>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  margin: "0px",
                }}
              >
                Java
              </h1>
              <p style={{ margin: "0px" }}>
                Around 2 months of Indepth Experience with Java Programming
                Language from Programming and Algorithm Class Subject.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
