// src/NavBlackTheme.jsx

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBlackTheme.css';
import Logo from '../assets/Logo.png';
import LogoS from '../assets/Logo s.png'

const NavBlackTheme = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="w-32">
        <img src={LogoS} alt="Logo" />
      </div>
      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        <li>
          <Link to="/" className={pathname === '/' ? 'active' : ''} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/schools" className={pathname === '/schools' ? 'active' : ''} onClick={closeMenu}>
            Schools
          </Link>
        </li>
        <li>
          <Link to="/colleges" className={pathname === '/colleges' ? 'active' : ''} onClick={closeMenu}>
            Colleges
          </Link>
        </li>
        <li>
          <Link to="/e-learning" className={pathname === '/e-learning' ? 'active' : ''} onClick={closeMenu}>
            E-learning
          </Link>
        </li>
        <li>
          <Link to="/about" className={pathname === '/about' ? 'active' : ''} onClick={closeMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBlackTheme;
