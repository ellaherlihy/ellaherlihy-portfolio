import React from "react";
import Project from "../components/Project";
import {AppData} from '../AppData';
import FoxWren from "../media/LeahHerlihy.png";

export default function LingoBuddy() {
  return (
    <Project
      url={AppData[2].url}
      gif={FoxWren}
      title={AppData[2].title}
      description={AppData[2].description}
      github={AppData[2].github}
      stack={AppData[2].stack}
    />
  )
}
