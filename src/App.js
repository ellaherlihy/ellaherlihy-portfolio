import './App.css';

import { Routes, Route } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor";
import LingoBuddy from './pages/LingoBuddy';
import FoxWren from './pages/FoxWren';
import Ryalto from './pages/Ryalto';
import ShouldIRun from './pages/ShouldIRun';
import ECommerce from './pages/E-Commerce';
import VintageWheels from './pages/VintageWheels';


import Home from './pages/Home'

function App() {
  return (
    <div className="App">
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
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/lingo-buddy" element={ <LingoBuddy /> }/>
        <Route path="/fox-wren" element={ <FoxWren /> }/>
        <Route path="/ryalto" element={ <Ryalto /> }/>
        <Route path="/should-i-run" element={ <ShouldIRun /> }/>
        <Route path="/e-commerce-store" element={ <ECommerce /> }/>
        <Route path="/vintage-wheels" element={ <VintageWheels /> }/>
      </Routes>
    </div>
  );
}

export default App;
