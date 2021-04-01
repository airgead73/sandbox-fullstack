import { ProjectsLanding, ProjectsSidebar } from './../pages/Projects';
import { PhotosLanding, PhotosSidebar } from '../pages/Photos';
import { PageNotFound, PageNotFoundSidebar } from './../pages/PageNotFound';

const routesProtected = [
  {
    path: '/projects',
    sidebar: () => <ProjectsSidebar/>,
    landing: () => <ProjectsLanding/>
  },
  {
    path: '/photos',
    sidebar: () => <PhotosSidebar/>,
    landing: () => <PhotosLanding/>
  },   
  {
    path: '*',
    sidebar: () => <PageNotFoundSidebar/>,
    landing: () => <PageNotFound/>
  },  
 
];

export default routesProtected;