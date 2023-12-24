import React from "react";
import { Fade } from "react-reveal";

export default function WebsiteProject({ data }) {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "60px" }}>
        <Fade>
          <div className="d-flex justify-content-start">
            <p style={{ fontSize: "24px", fontWeight: "500" }}>
              Website Project
            </p>
          </div>
        </Fade>
        {data.map((item, index) => (
          <div className="col-lg-6 col-sm-12" key={index}>
            <div style={{ marginTop: "20px" }}>
              {" "}
              <Fade bottom delay={100 * index}>
                <a
                  className="card border-0"
                  href={item.webHref}
                  target="_blank"
                >
                  <img
                    className="websiteproject-img rounded-3"
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
  );
}
