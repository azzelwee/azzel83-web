import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

import PayPalIcon from './icons/paypal.png';
import GCashIcon from './icons/gcash.png';

function PriceList() {
  return (
    <div className="price-list-container">
      <div className="price-list">
        <header className="price-header">
          <h1 className="title">Base Blueprint Commission</h1>
          <p className="subtitle">Custom Base Designs Tailored Just for You</p>
        </header>

        <section className="commission-section">
          <div className="commission-card">
            <h2 className="section-title">From YouTube Video</h2>
            <p className="description">
              Pick any one design from my YouTube videos for a fixed price of $20.
            </p>
          </div>
        </section>

        <section className="custom-design-section">
          <h2 className="section-title">Customized Design</h2>
          <div className="price-cards">
            <div className="price-card">
              <h3 className="price-title">1. Simple Base</h3>
              <p className="price-range">
                <span className="original-price">${10} - ${15}</span> 
                <br />
                <strong className="discounted-price">${(10 * 0.9).toFixed(2)} - ${(15 * 0.9).toFixed(2)}</strong>
              </p>
              <p className="features">Small, functional bases with basic features.</p>
            </div>

            <div className="price-card">
              <h3 className="price-title">2. Medium Base</h3>
              <p className="price-range">
                <span className="original-price">${20}</span> - <span className="original-price">${25}</span> 
                <br />
                <strong>${(20 * 0.9).toFixed(2)} - ${(25 * 0.9).toFixed(2)}</strong>
              </p>
              <p className="features">Moderate size with defense systems, resource management, and crafting stations.</p>
            </div>

            <div className="price-card">
              <h3 className="price-title">3. Complex Base</h3>
              <p className="price-range">
                <span className="original-price">${30}</span> - <span className="original-price">${40}</span> 
                <br />
                <strong>${(30 * 0.9).toFixed(2)} - ${(40 * 0.9).toFixed(2)}</strong>
              </p>
              <p className="features">Fully functional, with basement, or unique setups with heavy defenses.</p>
            </div>

            
          </div>

          
          <p className="note"><em>All designs include Acid/Oil Production (if available) and Crop Farm.</em></p>
        </section>

        <section className="payment-contact-section">
          <h2 className="section-title">Accepting Payment Methods</h2>
          <div className="payment-methods">
            <img src={PayPalIcon} alt="PayPal" className="payment-icon" />
            <img src={GCashIcon} alt="GCash" className="payment-icon" />
          </div>
        </section>


      </div>
    </div>
  );
}

export default PriceList;
