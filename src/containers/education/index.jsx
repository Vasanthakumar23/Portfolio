import React, { useContext } from "react";
import "./index.css";
import Card from "./card";
import eduimg from "../../assets/svg/education/eduYellow.svg";
import { educationInfo } from "../../portfolio";

function Education() {
  return (
    <div
      className="education"
      id="education"
      style={{ backgroundColor: "white" }}
    >
      <div className="education-body">
        <div className="education-description">
          <h1 style={{ color: "black" }}>Education</h1>
          {educationInfo.schools.map((edu) => (
            <Card
              institution={edu.schoolName}
              course={edu.subHeader}
              duration={edu.duration}
            />
          ))}
        </div>
        <div className="education-image">
          <img src={eduimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Education;
