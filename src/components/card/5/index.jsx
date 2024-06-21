import React from "react";
import { FaPlay, FaCode } from "react-icons/fa";
import Fade from "react-reveal/Fade";

import placeholder from "../../../assets/png/placeholder.png";
import "./index.css";

function SingleProject({ name, desc, tags, code, demo, image }) {
  return (
    <Fade bottom>
      <div className="singleProject" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="projectContent">
          <h2
            id={name.replace(" ", "-").toLowerCase()}
            style={{ color: "black" }}
          >
            {name}
          </h2>
          <img src={image ? image : placeholder} alt={name} />
          <div className="project--showcaseBtn">
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="iconBtn"
              aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                .replace(" ", "-")
                .toLowerCase()}-demo`}
            >
              <FaPlay
                id={`${name.replace(" ", "-").toLowerCase()}-demo`}
                className="icon"
                aria-label="Demo"
              />
            </a>
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className="iconBtn"
              aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                .replace(" ", "-")
                .toLowerCase()}-code`}
            >
              <FaCode
                id={`${name.replace(" ", "-").toLowerCase()}-code`}
                className="icon"
                aria-label="Code"
              />
            </a>
          </div>
        </div>
        <p
          className="project--desc"
          style={{
            background: "#ffc200",
            color: "black",
          }}
        >
          {desc}
        </p>
        <div
          className="project--lang"
          style={{
            background: "#ffc200",
            color: "black",
          }}
        >
          {tags.map((tag, id) => (
            <span key={id}>{tag}</span>
          ))}
        </div>
      </div>
    </Fade>
  );
}

export default SingleProject;
