import { ProjectsAdd, ProjectsDetail, ProjectsUpdate } from './../pages/Projects';
import { PhotosAdd } from './../pages/Photos';
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
    path: '/:id/addphoto',
    main: () => <PhotosAdd/>
  },
  {
    path: '/*',
    main: () => <PnfLanding/>
  },    

];

export default routesProjects;