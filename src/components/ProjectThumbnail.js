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


{/* <div class="image-container">
  <img src="path_to_your_image.jpg" alt="Your Image" class="overlay-image">
  <div class="overlay">
    <div class="overlay-text">
      <h2>Overlay Text</h2>
      <p>This is the text overlaying the image.</p>
    </div>
  </div>
</div> */}
