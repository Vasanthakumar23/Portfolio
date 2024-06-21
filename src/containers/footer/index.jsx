import React, { useContext } from "react";
import "./index.css";
import { Fade } from "react-reveal";

export default function Footer() {
  const isDark = false;
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Copyright © 2024 by @vasanthakumar | All Rights Reserved
        </p>
      </div>
    </Fade>
  );
}
