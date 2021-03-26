import React from 'react';
import { Link } from 'react-router-dom';
import Home from './../pages/Home';
import { ProjectsLanding } from './../pages/Projects';
import { ProjectsAdd } from './../pages/Projects';
import { ProjectsDetail } from './../pages/Projects';
import { ProjectsUpdate } from './../pages/Projects';

const ProjectsLinks = () => {
  return (
    <ul>
      <li><Link to="/projects/add">add a project</Link></li>
      <li><Link to="/projects/detail">project detail</Link></li>
      <li><Link to="/projects/update">update a project</Link></li>
    </ul>
  )
}

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home page information</div>,
    main: () => <Home/>,
  },
  {
    path: '/projects',
    exact: false,
    sidebar: () => <ProjectsLinks/>,
    main: () => <ProjectsLanding/>
  }
];

const routes_projects = [
  {
    path: '/projects/add',
    exact: false,
    sidebar: () => <div>add sidebar</div>,
    main: () => <ProjectsAdd/>,
  },
  {
    path: '/projects/detail',
    exact: false,
    sidebar: () => <div>detail sidebar</div>,
    main: () => <ProjectsDetail/>,
  },
  {
    path: '/projects/update',
    exact: false,
    sidebar: () => <div>update sidebar</div>,
    main: () => <ProjectsUpdate/>,
  },     

];

export { 
  routes,
  routes_projects 
}