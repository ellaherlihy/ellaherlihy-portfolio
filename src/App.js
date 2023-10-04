import './App.css';
import AboutMe from './components/AboutMe';
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import AnimatedCursor from "react-animated-cursor";
import Project from "./components/Project";
import { AppData } from './AppData';
import LingoBuddyGif from "./media/Lingo-buddy.gif";
import VintageWheelsGif from "./media/Vintage-wheels.gif";
import Contact from "./components/Contact";
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />

      <LandingPage />
      <AboutMe />
      <AnimatedCursor
            innerSize={20}
            outerSize={20}
            color='241, 81, 86'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
          ]}
          />
      <h1 className='section-header' id="project">Projects</h1>
      <Project
          url="https://lingo-buddy-personal-90a867b34a95.herokuapp.com/"
          gif={LingoBuddyGif}
          title="Lingo Buddy"
          description={AppData[0].description}
          github={AppData[0].github}
        />
        <br></br>
        <br></br>
        <hr class="line"></hr>
        <Project
          url="https://vintagewheelsapp-f9c23e1b54e2.herokuapp.com/"
          gif={VintageWheelsGif}
          title="Vintage Wheels"
          description={AppData[1].description}
          github={AppData[1].github}
        />
        <br></br>
        <br></br>
        <br></br>
        <Contact />
        <Footer />
    </div>

  );
}

export default App;
