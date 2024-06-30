import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css';

const Footer = () => {

  const handleContactClick = () => {
    // history.push('/contact');
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>WEPPSO</h3>
          <p>Weppso is a technology company providing creating and powerful solutions to their visionary clients.</p>
          <div className="footer-social-icons">
            {/* Add your social media icons here */}
          </div>
         
        </div>
      
        <div className="footer-section footer-pages">
          <h4>Pages</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section footer-pages">
          <h4>Reachout to us!</h4>
          <button className="CTA-button " onClick={handleContactClick}>Contact Us</button>

        </div>
      </div>
    
    </footer>
  );
};

export default Footer;
