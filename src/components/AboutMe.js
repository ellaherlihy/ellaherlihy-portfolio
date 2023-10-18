import React from "react";
// import { DiJavascript1, DiCss3, DiRubyRough } from "react-icons/di";
// import { SiRubyonrails } from "react-icons/si";
// import { AiFillHtml5 } from "react-icons/ai";
// import { BiLogoReact } from "react-icons/bi";

export default function AboutMe() {
  return (
    <div className="about-me">
      <div className="scallop"></div>
      <h1>Hello, I'm Ella 👋🏻</h1>
      <p>
        A Brighton based web developer, I made the jump from the world of TV & film production and haven't looked back since.
         I mainly use <strong class="emphasis">Ruby on Rails, Javascript ES6, CSS, HTML</strong> and <strong class="emphasis">React.js</strong>
         <br></br>
         <br></br>
        Below are some of my recent projects - if you would like to collaborate on a project together, I would love to hear from you.
      </p>
      {/* <div className="about-me--tech-stack">
        <DiJavascript1 className="icon"></DiJavascript1>
        <SiRubyonrails className="icon"></SiRubyonrails>
        <DiRubyRough className="icon"></DiRubyRough>
        <DiCss3 className="icon"></DiCss3>
        <AiFillHtml5 className="icon"></AiFillHtml5>
        <BiLogoReact className="icon"></BiLogoReact>
      </div> */}
      <div className="scallop-white"></div>
    </div>
  )
}
