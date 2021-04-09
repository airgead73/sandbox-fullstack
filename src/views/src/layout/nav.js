import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({layout}) => {
  return ( 
    <nav className={`nav nav--${layout}`}>
      <ul className="nav__list">
        <li className="nav__item"><Link className="nav__link" to="/">home</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/projects">projects</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/photos">photos</Link></li>
      </ul> 
    </nav>
   );
}
 
export default Nav;