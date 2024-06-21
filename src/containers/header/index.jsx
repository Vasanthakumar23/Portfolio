import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./index.css";
import StyleContext from "../../contexts/index";
import {
  greeting,
  about,
  skillsSection,
  achievementSection,
  bigProjects,
} from "../../portfolio";

function Header() {
  // const {isDark} = useContext(StyleContext);
  const isDark = false;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  // const viewResume = resumeSection.display;
  const viewAbout = about.display;
  const ViewProjects = bigProjects.display;
  // console.log(viewAchievement);
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
        <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#home">Home</a>
          </li>
          {viewAbout && (
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>
          )}
          {/* {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )} */}
          {/* {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )} */}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {ViewProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          {/* note:vk | toggle  */}
          {/* <li>
            eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a>
              <ToggleSwitch />
            </a>
          </li> */}
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
