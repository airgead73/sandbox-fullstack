import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarRoutes } from './../routes'

const Nav = () => {

  return ( 
    <nav>
    <ul>
      <li><Link to="/">home</Link></li>
      <li><Link to="/projects">projects</Link></li> 
    </ul>
    <SidebarRoutes/>
  </nav>
   );
}
 
export default Nav;