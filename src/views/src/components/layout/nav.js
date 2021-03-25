import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsNav = () => {
  return ( 
    <ul>
      <li><Link to="/projects/detail">detail</Link></li>
      <li><Link to="/projects/add">add project</Link></li>
      <li><Link to="/projects/update">update project</Link></li>      
    </ul>
   );
};

const PhotosNav = () => {
  return ( 
    <ul>
      <li><Link to="/photos/detail">detail</Link></li>
      <li><Link to="/photos/add">add photo</Link></li>
      <li><Link to="/photos/update">update photo</Link></li>      
    </ul>
   );
};

const Nav = () => {
  return ( 
    <nav>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/projects">projects</Link>
          <ProjectsNav/>
        </li>
        <li><Link to="/photos">photos</Link>
          <PhotosNav/>
        </li>
      </ul>
    </nav>
   );
}
 
export default Nav;