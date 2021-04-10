import { ProjectsAdd, ProjectsDetail, ProjectsUpdate } from './../pages/Projects';
import { PnfLanding} from './../pages/PnF';

const routesProjects = [
  
  {
    path: '/add',
    exact: true,
    main: () => <ProjectsAdd/>
  },
  {
    path: '/:id/detail',
    main: () => <ProjectsDetail/>
  },  
  {
    path: '/:id/update',
    main: () => <ProjectsUpdate/>
  },
  {
    path: '/*',
    main: () => <PnfLanding/>
  },    

];

export default routesProjects;