import React from "react";
import { FiGithub } from "react-icons/fi";
import { BsLink45Deg } from "react-icons/bs";
import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';

export default function Project(props) {
  const techStack = props.stack;
  console.log(techStack)
  return (
    <div>
      <div className="project">
        <div className="project--display">
          <a href={props.url} target="_blank" rel="noreferrer"><img src={props.gif} alt="my-gif" className="project--gif"/></a>
          <div className="project--icons">
          {techStack.map((tech) => (
            <span className="tech-icon">{tech}</span>
          ))}
            <a  className="link-icon" href={props.url} target="_blank" rel="noreferrer"><BsLink45Deg /></a>
            <a className="github-icon" href={props.github} target="_blank" rel="noreferrer"><FiGithub /></a>
          </div>
        </div>
        <Fade bottom>
          <div className="project--info">
          <div className="project--title">{props.title}</div>
            <div className="project--description">{props.description}</div>
          </div>
        </Fade>
      </div>
      <div className="button-container">
      <Link to="/#project">
        <button className="project-button"><p>Back to main page</p></button>
      </Link>
      </div>
    </div>
  )
}
