import React, { useContext } from "react";

import Fade from "react-reveal/Fade";

import { AiOutlineFolder } from "react-icons/ai";

import "./index.css";

function AchievementCard({ title, details, date }) {
  //   const { theme } = useContext(ThemeContext);

  //   const useStyles = makeStyles((t) => ({
  //     achievementCard: {
  //       backgroundColor: theme.primary30,
  //       "&:hover": {
  //         backgroundColor: theme.primary50,
  //       },
  //     },
  //   }));

  //   const classes = useStyles();
  return (
    <Fade bottom>
      <div className={`achievement-card `}>
        <div className="achievecard-content">
          <div className="achievecard-details1">
            <h2 style={{ color: "black" }}>{title}</h2>
            <p style={{ color: "grey" }}>{details}</p>
          </div>
          <div className="achievecard-details2" style={{ color: "#ffc200" }}>
            <h5>{date}</h5>
            {/* <div className="achievecard-field">
       
              <h5>{field}</h5>
            </div> */}
          </div>
        </div>
        {/* <div className="achievecard-imgcontainer">
          <img src={image} alt="" />
        </div> */}
      </div>
    </Fade>
  );
}

export default AchievementCard;
