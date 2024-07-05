import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>WEPSSO</h1>
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
        <li><Link to="/services" onClick={closeMobileMenu}>Services</Link></li>
        <li><Link to="/blogs" onClick={closeMobileMenu}>Blogs</Link></li>
        <li><Link to="/contactus" onClick={closeMobileMenu}>Contact Us</Link></li>
        <li><Link to="/reachout" className="contact-button" onClick={closeMobileMenu}>Contact Us</Link></li>
      </ul>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        &#9776;
      </div>
    </nav>
  );
}

export default Navbar;
