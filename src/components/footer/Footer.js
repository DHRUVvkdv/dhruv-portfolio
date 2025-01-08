import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import VisitorCount from "../visitorCount/VisitorCount.js";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <div className="footer-content">
          <p className="footer-text" style={{ color: props.theme.secondaryText }}>
            Made with <span role="img" aria-label="love">❤️</span> by {greeting.title}
          </p>
          <VisitorCount />
        </div>
      </Fade>
    </div>
  );
}
