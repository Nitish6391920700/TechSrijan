import React from 'react';
import './Footer.module.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src="/path-to-logo.png" alt="Antragni Logo" className="footer-logo" />
          <button className="register-btn">Register Now</button>
        </div>
        <div className="footer-section">
          <h3>Participate</h3>
          <ul>
            <li><a href="#events">Events Portal</a></li>
            <li><a href="#ca">CA Portal</a></li>
            <li><a href="#community">Join The Community</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Explore More</h3>
          <ul>
            <li><a href="#attractions">Star Attractions</a></li>
            <li><a href="#hall-of-fame">Hall Of Fame</a></li>
            <li><a href="#brochure">Brochure</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Reach Out To Us</h3>
          <ul>
            <li><a href="#queries">Have Any Queries?</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#associate">Associate With Us</a></li>
          </ul>
        </div>
      </div>
      <div className="social-links">
        <a href="#whatsapp" className="social-icon">WhatsApp</a>
        <a href="#instagram" className="social-icon">Instagram</a>
        <a href="#x" className="social-icon">X</a>
        <a href="#youtube" className="social-icon">YouTube</a>
        <a href="#linkedin" className="social-icon">LinkedIn</a>
        <a href="#facebook" className="social-icon">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
