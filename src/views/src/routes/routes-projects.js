import { 
  ProjectsAdd,
  ProjectsList,
  ProjectsDetail,
  ProjectsUpdate
 } from './../pages/Projects';
import { PageNotFound } from './../pages/PageNotFound';

const routesProjects = [
  {
    path: '/add',
    exact: true,
    main: () => <ProjectsAdd/>
  },
  {
    path: '/list',
    main: () => <ProjectsList/>
  },
  {
    path: '/:id/detail',
    main: () => <ProjectsDetail/>
  },  
  {
    path: '/:id/update',
    landing: () => <ProjectsUpdate/>
  },
  {
    path: '/*',
    main: () => <PageNotFound/>
  },     
 
];

export default routesProjects;