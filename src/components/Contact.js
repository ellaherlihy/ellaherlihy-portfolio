import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact--box">
        <h1>Say hello!</h1>
        <h2 onClick={() => window.location = 'mailto:ellaherlihy@icloud.com'} target="_blank">ellaherlihy@icloud.com</h2>
        <h1>Follow Me</h1>
        <a href="https://github.com/ellaherlihy" target="_blank" rel="noreferrer"><FiGithub className="contact-icon"/></a>
        <a href="https://www.linkedin.com/in/ella-herlihy/" target="_blank" rel="noreferrer"><FiLinkedin className="contact-icon"/></a>
      </div>
    </div>
  )
}
