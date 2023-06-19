import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/icofont.min.css';
import './assets/css/animate.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
// import lax from 'lax.js';
import MainBanner from './components/Home/MainBanner';
import About from './components/Home/About';
import Speakers from './components/Home/Speakers';
import EventSchedules from './components/Home/EventSchedules';
import Footer from './components/Common/Footer';
import FunFact from './components/Home/FunFact';
import Partner from './components/Home/Partner';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation/Navigation";
import SpeakersPage from "./components/pages/SpeakersPage";
import SponsorsPage from "./components/pages/SponsorsPage";
import SchedulePage from "./components/pages/SchedulePage";

const Home = () => (
  <>
    <Navigation />
    <MainBanner />
    <About />
    <FunFact />
    <div id="speakers">
      <Speakers />
    </div>
    <div id="sponsors">
      <Partner />
    </div>
    <div id="schedule">
      <EventSchedules />
    </div>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      {Home()}
    </Router>
  );
}

export default App;
