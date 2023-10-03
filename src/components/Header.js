import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Header() {
  return (
    <div className="header">
      <p>About Me</p>
      <p>Projects</p>
      <p>Contact</p>
      <a href="https://github.com/ellaherlihy" target="_blank" rel="noreferrer"><FiGithub /></a>
      <a href="https://www.linkedin.com/in/ella-herlihy/" target="_blank" rel="noreferrer"><FiLinkedin className="linkedIn-icon"/></a>
    </div>
  )
}
