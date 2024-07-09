import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css';

const Footer = () => {
  const handleContactClick = () => {
    console.log("hello");
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>WEPPSO</h3>
          <p>Weppso is a technology company providing creative and powerful solutions to their visionary clients.</p>
          <div className="footer-social-icons">
            {/* Add your social media icons here */}
          </div>
        </div>
        <div className="footer-section footer-pages">
          <h4>Pages</h4>
          <ul>
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section footer-pages">
          <h4>Reach out to us!</h4>
          <button className="CTA-button" onClick={handleContactClick}>Contact Us</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
