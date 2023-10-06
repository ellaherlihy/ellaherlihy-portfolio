import React from "react";
import { Fade } from "react-awesome-reveal";
// import { SiRubyonrails } from "react-icons/si";
// import { BiLogoReact } from "react-icons/bi";
// import { AiOutlineHtml5 } from "react-icons/ai";


export default function LandingPage() {
  return (

      <div className="landing-page">
        <h1><Fade duration={4000}>Ella Herlihy</Fade></h1>
        <h2><Fade duration={4000}>Web Developer</Fade></h2>
        {/* <div className="landing-page-icons">
          <SiRubyonrails />
          <BiLogoReact />
          <AiOutlineHtml5 />
        </div> */}
        <div className="scallop"></div>
      </div>
  )
}
