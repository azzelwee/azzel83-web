import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import discordLogo from './icons/dc.png';
import youtubeLogo from './icons/youtube.webp';
import tiktokLogo from './icons/tiktok.webp';
import homeIcon from './icons/home-icon.png';

import PriceList from './PriceLists.js';
import CommissionForm from './CommissionForm.js';
import AboutAzzel83 from './AboutAzzel83';
import Portfolio from './Portfolio';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <Link to="/">
            <img src={homeIcon} alt="Home" className="home-icon" />
          </Link>
          <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
            &#9776;
          </div>
          <nav className={`nav-links ${isMenuOpen ? "show" : ""}`}>
            <Link to="/about" className="nav-link">About Azzel83</Link>
            <a href="https://www.youtube.com/@Azzel83" className="nav-link" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://www.tiktok.com/@Azzel83" className="nav-link" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="#contact" className="nav-link">More</a>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={
            <>
              <section className="home">
                <h1>Welcome to Azzel83!</h1>
                <p>Explore amazing base designs in the game Once Human.</p>
                <Link to="/portfolio" className="cta-button">Explore Base Designs</Link>
                <Link to="/pricelist" className="pricelist-button">Commission Price List</Link>
                <p className="subs">Make sure to Follow and Subscribe to get updated from the latest contents:</p>
                <div className="social-buttons">
                  <a href="https://www.youtube.com/@Azzel83" className="social-button youtube" target="_blank" rel="noopener noreferrer">
                    <img src={youtubeLogo} alt="YouTube" className="social-icon" />
                  </a>
                  <a href="https://www.tiktok.com/@Azzel83" className="social-button tiktok" target="_blank" rel="noopener noreferrer">
                    <img src={tiktokLogo} alt="TikTok" className="social-icon" />
                  </a>
                </div>
              </section>

              <section id="contact" className="contact">
                <h2>Reach Me</h2>
                <p>If you're interested in custom base designs, feel free to reach out to me on Discord!</p>
                <a href="https://discord.com/users/379586610305433600" target="_blank" rel="noopener noreferrer">
                  <img src={discordLogo} alt="Discord Icon" style={{ width: '60px', height: '45px', marginBottom: '-16px', marginLeft: '-25px', marginRight: '-10px' }} />
                  <span style={{ color: 'white', textDecoration: 'underline', textUnderlineOffset: '5px' }}>azzel83</span>
                </a>
              </section>
            </>
          } />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutAzzel83 />} />
          <Route path="/pricelist" element={<PriceList />} />
          <Route path="/commission-form" element={<CommissionForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
