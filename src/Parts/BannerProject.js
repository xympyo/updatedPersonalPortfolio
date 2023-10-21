import React from "react";
import { Fade } from "react-reveal";

export default function BannerProject({ data }) {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "60px" }}>
        <Fade>
          <div className="d-flex justify-content-start">
            <p style={{ fontSize: "24px", fontWeight: "500" }}>
              Banner Project
            </p>
          </div>
        </Fade>
        {data.map((item, index) => (
          <div className="col-12" key={index}>
            <div style={{ marginTop: "20px" }}>
              <Fade left delay={100 * index}>
                <a className="card border-0">
                  <img src={item.imageUrl} alt={`Image ${index}`} />
                </a>
              </Fade>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
