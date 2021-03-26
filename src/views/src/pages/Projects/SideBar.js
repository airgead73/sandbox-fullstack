import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsSidebar = () => {
  return (
    <ul>
      <li><Link to="/projects/add">add project</Link></li>
      <li><Link to="/projects/detail">project detail</Link></li>
      <li><Link to="/projects/update">project update</Link></li>
      <li><Link to="/projects/list">projects list</Link></li>
    </ul>
  )
}

export default ProjectsSidebar;