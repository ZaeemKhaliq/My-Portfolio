import React, { useMemo } from "react";

import "./Footer.css";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const socialIcons = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/zaeem-khaliq-462aa0190/",
    icon: <LinkedInIcon style={{ color: "#2867B2", fontSize: 32 }} />,
  },
  {
    name: "Github",
    link: "https://github.com/ZaeemKhaliq",
    icon: <GitHubIcon style={{ color: "black", fontSize: 32 }} />,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/zaeem.khaliq/",
    icon: <FacebookIcon style={{ color: "#4267B2", fontSize: 32 }} />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ZaeemKhaliq",
    icon: <TwitterIcon style={{ color: "#1DA1F2", fontSize: 32 }} />,
  },
];

export default function Footer() {
  const redirect = (num) => {
    if (num === 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="footer">
      <p className="footer__reach-me-on">Reach me on</p>

      <div className="footer__social-icons">
        {socialIcons.map((socialIcon, index) => {
          return (
            <a
              key={index}
              href={socialIcon.link}
              alt={socialIcon.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialIcon.icon}
            </a>
          );
        })}
      </div>

      <div className="footer__copyrights-container">
        <p>Copyrights ® {useMemo(() => new Date().getFullYear(), [])}</p>
        <p>Created By Zaeem Khaliq</p>
      </div>
      <button
        className="footer__scroll-to-top-button"
        onClick={() => redirect(0)}
      >
        <KeyboardArrowUpIcon />
      </button>
    </footer>
  );
}
