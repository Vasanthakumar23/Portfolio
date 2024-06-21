import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./index.css";
// import landingPerson from "../../assets/lottie/landingPerson";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia";
import Button from "../../components/button/2";
import { illustration, greeting } from "../../portfolio";
import VK from "../../assets/VK-removebg.png";
export default function Greeting() {
  //   const { isDark } = useContext(StyleContext);
  const isDark = false;
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="home">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}
                <span className="wave-emoji">{emoji("👋")}, </span>
                <span>{greeting.im}</span>
                <div class="animated-info">
                  <span class="animated-item">Vasanthakumar</span>
                  <span class="animated-item">MERNSTACK developer</span>
                  <span class="animated-item">Web Designer</span>
                  <span class="animated-item">UI Specialist</span>
                </div>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={require("./vk_resume.pdf")}
                    download="VKResume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img alt="man sitting on table" src={VK} className="img-align"></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
