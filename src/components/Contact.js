import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="contact">
      <div className="scallop"></div>
      <div className="contact--box">
        <h1>say hello!</h1>
        <h2 onClick={() => window.location = 'mailto:ellaherlihy@icloud.com'} target="_blank">ellaherlihy@icloud.com</h2>
        <h1>follow me</h1>
        <div className="contact-icons">
          <a href="https://github.com/ellaherlihy" target="_blank" rel="noreferrer"><FiGithub className="contact-icon"/></a>
          <a href="https://www.linkedin.com/in/ella-herlihy/" target="_blank" rel="noreferrer"><FiLinkedin className="contact-icon"/></a>
          </div>
      </div>
    </div>
  )
}
