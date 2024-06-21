import React, { useContext } from "react";

import "./index.css";

import { achievementData } from "../../components/achievementsData";
import AchievementCard from "./card";

function Achievement() {
  return (
    <>
      {achievementData.achievements.length > 0 && (
        <div
          className="achievement"
          id="achievements"
          style={{ backgroundColor: "white" }}
        >
          <div className="achievement-body">
            <h1 style={{ color: "black" }}>Achievements</h1>
            <h4 style={{ color: "grey" }}>{achievementData.bio}</h4>
          </div>
          <div className="achievement-cards">
            {achievementData.achievements.map((achieve) => (
              <AchievementCard
                title={achieve.title}
                details={achieve.details}
                date={achieve.date}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Achievement;
