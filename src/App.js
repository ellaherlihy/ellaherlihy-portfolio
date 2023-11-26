import './App.css';

import { Routes, Route } from 'react-router-dom';
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
