import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>WEPSSO</h1>
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/reachout" className="contact-button">Reachout To Us</Link></li>
      </ul>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        &#9776;
      </div>
    </nav>
  );
}

export default Navbar;
