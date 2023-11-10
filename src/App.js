import './App.css';
import AboutMe from './components/AboutMe';
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import AnimatedCursor from "react-animated-cursor";
import Project from "./components/Project";
import { AppData } from './AppData';
import LingoBuddyGif from "./media/Lingo-buddy.gif";
import VintageWheelsGif from "./media/Vintage-wheels.gif";
import FoxWren from "./media/LeahHerlihy.png"
import Ryalto from "./media/Ryalto.png"
import Contact from "./components/Contact";
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />

      <LandingPage />
      <AboutMe />
      <AnimatedCursor
            innerSize={10}
            outerSize={20}
            color='26, 200, 237'
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
            '.contact--email',
          ]}
          />
      <h1 className='section-header' id="project">Projects</h1>
      <Project
          url={AppData[0].url}
          gif={LingoBuddyGif}
          title={AppData[0].title}
          description={AppData[0].description}
          github={AppData[0].github}
          stack={AppData[0].stack}
        />
        <br></br>
        <br></br>
        <Project
          url={AppData[2].url}
          gif={FoxWren}
          title={AppData[2].title}
          description={AppData[2].description}
          github={AppData[2].github}
          stack={AppData[2].stack}
        />
        <br></br>
        <br></br>
        <Project
          url={AppData[3].url}
          gif={Ryalto}
          title={AppData[3].title}
          description={AppData[3].description}
          github={AppData[3].github}
          stack={AppData[3].stack}
        />
        <br></br>
        <br></br>
        <Project
          url={AppData[1].url}
          gif={VintageWheelsGif}
          title={AppData[1].title}
          description={AppData[1].description}
          github={AppData[1].github}
          stack={AppData[1].stack}
        />
        <br></br>
        <br></br>
        <Contact />
        <Footer />
    </div>

  );
}

export default App;
