import React from 'react';
import { HomeSidebar, HomeLanding } from './../pages/Home/index'
import { ProjectsSidebar, ProjectsLanding } from './../pages/Projects/index';
import { PhotosSidebar, PhotosLanding } from './../pages/Photos/index';
import { NotFoundSidebar, NotFoundLanding } from './../pages/NotFound/index'


const routes_primary = [
  {
    path: '/',
    exact: true,
    sidebar: () => <HomeSidebar/>,
    main: () => <HomeLanding/>,
  },
  {
    path: '/projects',
    exact: false,
    sidebar: () => <ProjectsSidebar/>,
    main: () => <ProjectsLanding/>
  },
  {
    path: '/photos',
    exact: false,
    sidebar: () => <PhotosSidebar/>,
    main: () => <PhotosLanding/>
  },  
  {
    path: '*',
    exact: false,
    sidebar: () => <NotFoundSidebar/>,
    main: () => <NotFoundLanding/>
  }  
];

export { routes_primary };