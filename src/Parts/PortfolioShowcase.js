import React from "react";
import { Fade } from "react-reveal";

export default function PortfolioShowcase({ data }) {
  console.log(data);
  return (
    <div className="container">
      <div className="row">
        <Fade>
          <div className="d-flex justify-content-center">
            <h1 style={{ fontSize: "26px", fontWeight: "700" }}>
              My Portfolio Showcase
            </h1>
          </div>
        </Fade>
        <div className="row" style={{ marginTop: "40px" }}>
          <Fade>
            <div className="d-flex justify-content-start">
              <p style={{ fontSize: "24px", fontWeight: "500" }}>
                Instagram Feed's
              </p>
            </div>
          </Fade>
          {data.map((item, index) => (
            <div className="col-lg-3 col-sm-6" key={index}>
              <div style={{ marginTop: "20px" }}>
                <Fade bottom delay={100 * index}>
                  <a
                    className="card border-0"
                    type="link"
                    href={item.linkToImg}
                    target="_blank"
                  >
                    <img
                      className="img-fluid designportfolio-img"
                      src={item.imageUrl}
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
  );
}
