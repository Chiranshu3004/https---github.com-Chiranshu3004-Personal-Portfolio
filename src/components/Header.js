import React, { useState } from 'react';
import { HashLink as Link, NavHashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getActiveClassName = (path) => {
    return location.pathname === path ? 'active-link' : '';
  };

  return (
    <header className='header'>
      <nav className='nav container'>
        <Link to='/' className='nav_logo'>CA</Link>

        <div className={`nav_menu ${menuOpen ? 'show' : ''}`}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <NavHashLink to="/" className={`nav__link ${getActiveClassName('/')}`} smooth>
                <i className="uil uil-estate nav__icon">&nbsp;&nbsp;</i>Home
              </NavHashLink>
            </li>
            <li className="nav__item">
              <NavHashLink to="/about" className={`nav__link ${getActiveClassName('/about')}`} smooth>
                <i className="uil uil-user nav__icon">&nbsp;&nbsp;</i>About
              </NavHashLink>
            </li>
            <li className="nav__item">
              <NavHashLink to="/education" className={`nav__link ${getActiveClassName('/education')}`} smooth>
                <i className="uil uil-graduation-cap nav__icon">&nbsp;&nbsp;</i>Education
              </NavHashLink>
            </li>
            <li className="nav__item">
              <NavHashLink to="/project" className={`nav__link ${getActiveClassName('/project')}`} smooth>
                <i className="uil uil-file-alt nav__icon">&nbsp;&nbsp;</i>Projects
              </NavHashLink>
            </li>
            <li className="nav__item">
              <NavHashLink to="/contact" className={`nav__link ${getActiveClassName('/contact')}`} smooth>
                <i className="uil uil-message nav__icon">&nbsp;&nbsp;</i>Contact
              </NavHashLink>
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick={toggleMenu}></i>
        </div>
        <div className="nav_toggle" onClick={toggleMenu}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
