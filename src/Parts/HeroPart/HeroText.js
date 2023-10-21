import React from "react";

export default function HeroText() {
  return (
    <div className="container" style={{ margin: "0px", padding: "0px" }}>
      <div className="d-flex flex-column">
        <h1
          className="fw-bolder"
          style={{ fontSize: "46px", lineHeight: "normal", margin: "0px" }}
        >
          Hi!, My name is
          <br />
          <span style={{ fontSize: "54px", lineHeight: "normal" }}>
            Moshe Dayan
          </span>
        </h1>
        <p style={{ fontSize: "14px", fontWeight: "400", margin: "0" }}>
          a self claim
        </p>
        <p style={{ fontSize: "14px", fontWeight: "700", margin: "0" }}>
          Front End Developer and Graphic Designer
        </p>
        <p
          style={{
            fontSize: "14px",
            fontWeight: "400",
            margin: "12px 0px 0px 0px",
          }}
        >
          a Junior Front End Developer with <br />
          <span style={{ fontSize: "14px", fontWeight: "700" }}>
            2 years
          </span>{" "}
          worth of Personal Project Experience
        </p>
        <p
          style={{
            fontSize: "14px",
            fontWeight: "400",
            margin: "12px 0px 0px 0px",
          }}
        >
          a Junior Graphic Designer with <br />
          <span style={{ fontSize: "14px", fontWeight: "700" }}>
            4 years
          </span>{" "}
          worth of Personal Project Experience
        </p>
      </div>
    </div>
  );
}
