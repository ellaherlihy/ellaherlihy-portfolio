import React from "react";
import Project from "../components/Project";
import {AppData} from '../AppData';
import RyaltoImg from "../media/Ryalto.png";

export default function Ryalto() {
  return (
    <Project
      url={AppData[3].url}
      gif={RyaltoImg}
      title={AppData[3].title}
      description={AppData[3].description}
      github={AppData[3].github}
      stack={AppData[3].stack}
    />
  )
}
