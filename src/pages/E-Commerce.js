import React from "react";
import Project from "../components/Project";
import {AppData} from '../AppData';
import ECommerceGIF from "../media/e-commerce.gif";

export default function ECommerce() {
  return (
    <Project
      url={AppData[5].url}
      gif={ECommerceGIF}
      title={AppData[5].title}
      description={AppData[5].description}
      github={AppData[5].github}
      stack={AppData[5].stack}
    />
  )
}
