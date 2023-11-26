import React from "react";
import Project from "../components/Project";
import {AppData} from '../AppData';
import VintageWheelsGIF from "../media/Vintage-wheels.gif";

export default function VintageWheels() {
  return (
    <Project
      url={AppData[1].url}
      gif={VintageWheelsGIF}
      title={AppData[1].title}
      description={AppData[1].description}
      github={AppData[1].github}
      stack={AppData[1].stack}
    />
  )
}
