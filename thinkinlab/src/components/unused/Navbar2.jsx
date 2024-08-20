import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png'


const Navbar2 = () => {
    return (
        <>
            <nav className="bg-white-200 w-full px-8 md:px-auto">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        {/* Logo */}
        <div className="md:order-1">
          <a href="/">
            <img src={Logo} alt="Thinkin Lab Logo" className="h-10 w-6" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="order-2 md:ml-auto md:order-2">
          <ul className="flex font-semibold space-x-4">
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
            <li>
            <NavLink
                    exact
                    to="/schools"
                    className={({ isActive }) =>
                      `md:px-4 md:py-2 rounded-md ${isActive ? 'bg-red-400 text-white' : 'hover:bg-red-400 hover:text-white'}`
                    }
                    style={({ isActive }) => ({
                      color: isActive ? 'white' : 'black',
                      backgroundColor: isActive ? '#F87171' : '',
                    })}
                  >
                  Schools
              </NavLink>
            </li>

            <li>
            <NavLink
                    exact
                    to="/colleges"
                    className={({ isActive }) =>
                      `md:px-4 md:py-2 rounded-md ${isActive ? 'bg-red-400 text-white' : 'hover:bg-red-400 hover:text-white'}`
                    }
                    style={({ isActive }) => ({
                      color: isActive ? 'white' : 'black',
                      backgroundColor: isActive ? '#F87171' : '',
                    })}
                  >
                  Colleges
              </NavLink>
            </li>
            <li>
            <NavLink
                    exact
                    to="/elearning"
                    className={({ isActive }) =>
                      `md:px-4 md:py-2 rounded-md ${isActive ? 'bg-red-400 text-white' : 'hover:bg-red-400 hover:text-white'}`
                    }
                    style={({ isActive }) => ({
                      color: isActive ? 'white' : 'black',
                      backgroundColor: isActive ? '#F87171' : '',
                    })}
                  >
                  E-Learning
              </NavLink>
            </li>
            <li>
            <NavLink
                    exact
                    to="/about"
                    className={({ isActive }) =>
                      `md:px-4 md:py-2 rounded-md ${isActive ? 'bg-red-400 text-white' : 'hover:bg-red-400 hover:text-white'}`
                    }
                    style={({ isActive }) => ({
                      color: isActive ? 'white' : 'black',
                      backgroundColor: isActive ? '#F87171' : '',
                    })}
                  >
                  About
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
        </>
    )
}

export default Navbar2;