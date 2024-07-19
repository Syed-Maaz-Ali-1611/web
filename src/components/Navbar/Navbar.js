import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (event) => {
    event.preventDefault(); // Prevent the default behavior
    const href = event.currentTarget.getAttribute('href');
    setIsMobileMenuOpen(false); // Close the mobile menu
    window.location.href = href; // Reload the page and navigate to the target
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>WEPSSO</h1>
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
        <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
        {/* <li><Link to="/blogs" onClick={handleLinkClick}>Blogs</Link></li> */}
        <li><Link to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
        <li><Link to="/reachout" className="contact-button" onClick={handleLinkClick}>Reachout To Us</Link></li>
      </ul>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        &#9776;
      </div>
    </nav>
  );
}

export default Navbar;
