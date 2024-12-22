import React from 'react';
import './Footer.css'; // Importing global CSS
import logo from '../Hero/text.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={logo} alt="Antragni Logo" className="footer-logo" />
          <Link
          
            to="https://linktr.ee/techsrijan">
          <button  className="register-btn">Register Now</button>
          </Link>
          
        </div>
        <div className="footer-section">
          <h3>Participate</h3>
          <ul>
            <li><a href="#events">Events Portal</a></li>
            <li><a href="#community">Join The Community</a></li>
          </ul>
        </div>
        <div className="footer-section">
  <h3>Stay Connected</h3>
  <ul>
    <li>
      <a href="https://www.instagram.com/techsrijan.mmmut/" target="_blank" rel="noopener noreferrer">
        Follow us on Instagram
      </a>
    </li>
    <li>
      <a href="https://whatsapp.com/channel/0029VaJ4Ql1ADTOG3gpxv03N" target="_blank" rel="noopener noreferrer">
        Join our WhatsApp Community
      </a>
    </li>
  </ul>
</div>

        <div className="footer-section">
          <h3>Reach Out To Us</h3>
          <ul>
            <li><a href="#queries">Have Any Queries?</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="#associate">Associate With Us</a></li>
          </ul>
        </div>
      </div>
      <div className="developer-info">
  <p>Developed by <span className="developer-name">Vishesh Tripathi</span> & <span className="developer-name">Nitish Maddheshiya</span></p>
</div>


    </footer>
  );
};

export default Footer;
