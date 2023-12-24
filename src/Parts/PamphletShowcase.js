import React from "react";
import { Fade } from "react-reveal";

export default function PamphletShowcase({ pamphletData, pamphletPieceData }) {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "60px" }}>
        <Fade>
          <div className="d-flex justify-content-start">
            <p style={{ fontSize: "24px", fontWeight: "500" }}>
              Pamphlet Designs
            </p>
          </div>
        </Fade>
        <div className="row">
          <div className="col-lg-6">
            {pamphletData.map((pamphletItem, index) => (
              <div
                className="col-lg-12 col-sm-12  d-flex justify-content-center justify-content-lg-start"
                key={index}
              >
                <a
                  target="_blank"
                  type="link"
                  href="https://www.instagram.com/gngrtt_/"
                >
                  <img
                    className="img-fluid rounded-4"
                    src={pamphletItem.pamphlet}
                    alt="Full Pamphlet"
                  />
                </a>
              </div>
            ))}
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="row">
              {pamphletPieceData.map((item, index) => (
                <div
                  className="col-lg-4 col-sm-12  d-none d-lg-block"
                  key={index}
                >
                  <div style={{ margin: "4px 0px 4px 0px" }}>
                    <Fade bottom delay={100 * index}>
                      <a className="card border-0" target="_blank">
                        <img
                          className="pamphletpieces rounded-2"
                          src={item.pieces}
                          alt={`Image ${index}`}
                        />
                      </a>
                    </Fade>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
