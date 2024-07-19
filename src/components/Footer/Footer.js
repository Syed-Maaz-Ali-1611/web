import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Footer/Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);  // Scroll to the top of the page
  };

  const handleLinkClick = (event) => {
    event.preventDefault(); // Prevent the default behavior
    const href = event.currentTarget.getAttribute('href');
    window.location.href = href; // Reload the page and navigate to the target
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
          <button className="CTA-button" onClick={handleContactClick}>GET IN TOUCH</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
