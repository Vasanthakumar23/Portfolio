import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import eduImgBlack from "../../assets/svg/education/eduImgBlack.svg";
import "./index.css";

function EducationCard({ institution, course, duration }) {
  const useStyles = makeStyles((t) => ({
    educationCard: {
      backgroundColor: "#f5f5f5",
      "&:hover": {
        backgroundColor: "f8f8f8",
        border: "1px solid grey",
      },
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div className={`education-card  ${classes.educationCard}`}>
        <div className="educard-img" style={{ backgroundColor: "#ffc200" }}>
          <img src={eduImgBlack} alt="" />
        </div>
        <div className="education-details">
          <h6 style={{ color: "#ffc200" }}>{duration}</h6>
          <h4 style={{ color: "black" }}>{course}</h4>
          <h5 style={{ color: "grey" }}>{institution}</h5>
        </div>
      </div>
    </Fade>
  );
}

export default EducationCard;
