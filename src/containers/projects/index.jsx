import React, { useContext } from "react";

import { projectsData } from "../../components/projectsData";
// import { HiArrowRight } from "react-icons/hi";

import "./index.css";
import SingleProject from "../../components/card/5";

function Projects() {
  //   const useStyles = makeStyles(() => ({
  //     viewAllBtn: {
  //       color: theme.tertiary,
  //       backgroundColor: theme.primary,
  //       transition: "color 0.2s",
  //       "&:hover": {
  //         color: theme.secondary,
  //         backgroundColor: theme.primary,
  //       },
  //     },
  //     viewArr: {
  //       color: theme.tertiary,
  //       backgroundColor: theme.secondary70,
  //       width: "40px",
  //       height: "40px",
  //       padding: "0.5rem",
  //       fontSize: "1.05rem",
  //       borderRadius: "50%",
  //       cursor: "pointer",
  //       transition: "background-color 0.2s",
  //       "&:hover": {
  //         color: theme.tertiary,
  //         backgroundColor: theme.secondary,
  //       },
  //     },
  //   }));

  //   const classes = useStyles();

  return (
    <>
      {projectsData.length > 0 && (
        <div
          className="projects"
          id="projects"
          style={{ backgroundColor: "#59b2f4" }}
        >
          <div className="projects--header">
            <h1 style={{ color: "black" }}>Projects</h1>
          </div>
          <div className="projects--body">
            <div className="projects--bodyContainer">
              {projectsData.slice(0, 3).map((project) => (
                <SingleProject
                  name={project.projectName}
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image}
                />
              ))}
            </div>

            {/* {projectsData.length > 3 && (
              <div className="projects--viewAll">
                <Link to="/projects">
                  <button className={classes.viewAllBtn}>
                    View All
                    <HiArrowRight className={classes.viewArr} />
                  </button>
                </Link>
              </div>
            )} */}
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
