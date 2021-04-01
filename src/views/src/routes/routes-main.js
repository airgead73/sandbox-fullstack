import { HomeLanding, HomeSidebar } from './../pages/Home';
import { ProjectsLanding, ProjectsSidebar } from './../pages/Projects';
import { PhotosLanding, PhotosSidebar } from '../pages/Photos';
import { PageNotFound, PageNotFoundSidebar } from './../pages/PageNotFound';

const routesMain = [
  {
    path: '/',
    exact: true,
    sidebar: () => <HomeSidebar/>,
    landing: () => <HomeLanding/>
  },
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

export default routesMain;