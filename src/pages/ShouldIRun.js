import React from "react";
import Project from "../components/Project";
import {AppData} from '../AppData';
import ShouldIRunImg from "../media/should-i-run.png";

export default function ShouldIRun() {
  return (
    <Project
      url={AppData[4].url}
      gif={ShouldIRunImg}
      title={AppData[4].title}
      description={AppData[4].description}
      github={AppData[4].github}
      stack={AppData[4].stack}
    />
  )
}
