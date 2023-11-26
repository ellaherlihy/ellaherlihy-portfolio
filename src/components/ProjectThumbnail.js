import React from "react";

export default function ProjectThumbnail(props) {
  return (
    <div className="image-container">
      <img src={props.img} alt={props.title} className="overlay-image"/>
      <div class="overlay">
        <div class="overlay-text">
          <h2>{props.title}</h2>
        </div>
      </div>
    </div>
  )
}
