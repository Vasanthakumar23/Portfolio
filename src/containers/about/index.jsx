import React, { useContext } from "react";

import "./index.css";
import { about } from "../../portfolio";
import ABoutimg from "../../assets/svg/about/blueTheme-boy.svg";
function About() {
  //   const { theme } = useContext(ThemeContext);
  return (
    <div className="about" id="about" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="line-styling">
        <div
          className="style-circle"
          style={{ backgroundColor: "#ffc200" }}
        ></div>
        <div
          className="style-circle"
          style={{ backgroundColor: "#ffc200" }}
        ></div>
        <div
          className="style-line"
          style={{ backgroundColor: "#ffc200" }}
        ></div>
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2 style={{ color: "black" }}>{about.Title}</h2>
          <p style={{ color: "grey" }}>
            {about.content}
            <br />
            <br />
            {about.subContent}
          </p>
        </div>
        <div className="about-img">
          <img src={ABoutimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
