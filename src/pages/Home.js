import '../App.css';
import { Link } from 'react-router-dom';
import AboutMe from '../components/AboutMe';
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
// import Project from "../components/Project";
import ProjectThumbnail from '../components/ProjectThumbnail';
import {AppData} from '../AppData';
import LingoBuddyImg from "../media/Lingo-buddy.png";
import VintageWheelsImg from "../media/vintage-wheels.png";
import FoxWren from "../media/LeahHerlihy.png"
import Ryalto from "../media/Ryalto.png"
import ShoudIRun from "../media/should-i-run.png"
import Ecommerce from "../media/ecommerce.png"
import Contact from "../components/Contact";
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <AboutMe />
      <h1 className='section-header' id="project">Projects</h1>
      <div className='thumbnails'>
        <Link to={AppData[0].page}>
          <ProjectThumbnail
            img={LingoBuddyImg}
            title={AppData[0].title}
            props={AppData[0].page}
          />
        </Link>
        <Link to={AppData[2].page}>
          <ProjectThumbnail
            img={FoxWren}
            title={AppData[2].title}
            props={AppData[2].page}
          />
        </Link>
        <Link to={AppData[3].page}>
          <ProjectThumbnail
            img={Ryalto}
            title={AppData[3].title}
            props={AppData[3].page}
          />
        </Link>
        <Link to={AppData[1].page}>
          <ProjectThumbnail
            img={VintageWheelsImg}
            title={AppData[1].title}
            props={AppData[1].page}
          />
        </Link>
        <Link to={AppData[4].page}>
          <ProjectThumbnail
            img={ShoudIRun}
            title={AppData[4].title}
            props={AppData[4].page}
          />
        </Link>
        <Link to={AppData[5].page}>
          <ProjectThumbnail
            img={Ecommerce}
            title={AppData[5].title}
            props={AppData[5].page}
          />
        </Link>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
