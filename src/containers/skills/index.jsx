import React, { useContext } from "react";
import Marquee from "react-fast-marquee";

import "./index.css";

import { skillsData } from "../../components/skillsData/index";
import { skillsImage } from "../../utils/skillsImage";

function Skills() {
  const skillBoxStyle = {
    backgroundColor: "#59b2f4",
    boxShadow: `0px 0px 30px #939191`,
  };

  return (
    <div className="skills" id="skills" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="skillsHeader">
        <h2 style={{ color: "black" }}>Skills</h2>
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div className="skill--box" key={id} style={skillBoxStyle}>
                <img src={skillsImage(skill)} alt={skill} />
                <h3 style={{ color: "white" }}>{skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;
