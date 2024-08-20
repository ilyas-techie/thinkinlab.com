import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png'

import './Nav2.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo h-8 w-6"><img src={Logo}/> </div>
      <ul className={isOpen ? 'nav-links show' : 'nav-links'}>
      <li>
            <NavLink
                    exact
                    to="/"
                    className={({ isActive }) =>
                      `md:px-4 md:py-2 rounded-md ${isActive ? 'bg-red-400 text-white' : 'hover:bg-red-400 hover:text-white'}`
                    }
                    style={({ isActive }) => ({
                      color: isActive ? 'white' : 'black',
                      backgroundColor: isActive ? '#F87171' : '',
                    })}
                  >
                  Home
              </NavLink>
            </li>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
