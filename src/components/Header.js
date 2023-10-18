import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Header() {
  return (
    <div className="header slide-left">
      <a href="#project"><p>Projects</p></a>
      <a href="#contact"><p>Contact</p></a>
      <a className="header-icon" href="https://github.com/ellaherlihy" target="_blank" rel="noreferrer"><FiGithub /></a>
      <a className="header-icon" href="https://www.linkedin.com/in/ella-herlihy/" target="_blank" rel="noreferrer"><FiLinkedin className="linkedIn-icon"/></a>
    </div>
  )
}
