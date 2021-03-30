import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './SideBar';

const Nav = () => {
  return ( 
    <nav>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/projects">projects</Link></li>     
      </ul>
      <Sidebar title="sidebar"/>
    </nav>
   );
}
 
export default Nav;