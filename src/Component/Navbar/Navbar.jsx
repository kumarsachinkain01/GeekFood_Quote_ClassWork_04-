import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
        <h2>GEEKFOOD</h2>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Quote</a></li>
        <li><a href="#menu">Restaurant</a></li>
        <li><a href="#Foods">Foods</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="auth-buttons">
        <button>Get Started</button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;