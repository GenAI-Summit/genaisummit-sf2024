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
    <MainBanner />
    <About />
    <FunFact />
    <Speakers />
    <Partner />
    <EventSchedules />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
    </Router>
  );
}

export default App;
