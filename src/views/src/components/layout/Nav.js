import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return ( 
    <nav className="nav">
      <ul>

        <li><Link to="/">home</Link></li>
        <li><Link to="/projects">projects</Link></li>
        <li><Link to="/photos">photos</Link></li>

      </ul>
    </nav>
   );
}
 
export default Nav;