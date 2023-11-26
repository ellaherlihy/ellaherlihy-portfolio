import React from "react";
import Project from "../components/Project";
import {AppData} from '../AppData';
import LingoBuddyGif from "../media/Lingo-buddy.gif";

export default function LingoBuddy() {
  return (
    <Project
      url={AppData[0].url}
      gif={LingoBuddyGif}
      title={AppData[0].title}
      description={AppData[0].description}
      github={AppData[0].github}
      stack={AppData[0].stack}
    />
  )
}
