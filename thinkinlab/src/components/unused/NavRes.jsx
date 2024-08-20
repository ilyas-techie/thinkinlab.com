// src/NavRes.jsx

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavRes.css';
import Logo from '../assets/Logo.png'
const NavRes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo h-10 w-7"><img src={Logo} /></div>
      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        <li><Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/schools" className={pathname === '/schools' ? 'active' : ''}>Schools</Link></li>
        <li><Link to="/colleges" className={pathname === '/colleges' ? 'active' : ''}>Colleges</Link></li>
        <li><Link to="/e-learning" className={pathname === '/e-learning' ? 'active' : ''}>E-learning</Link></li>
        <li><Link to="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
      </ul>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavRes;
