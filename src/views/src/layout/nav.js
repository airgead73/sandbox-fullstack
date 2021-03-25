import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ isAuthenticated }) => {
  return ( 
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><Link to="/">home</Link></li>
        {isAuthenticated && <li className="nav__item"><Link to="/projects">projects</Link></li>}
      </ul>
    </nav>
   );
}
 
export default Nav;