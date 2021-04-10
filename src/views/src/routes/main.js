import { HomeLanding, HomeSidebar } from './../pages/Home';
import { ProjectsLanding, ProjectsSidebar } from './../pages/Projects';
import { PnfLanding, PnfSidebar } from './../pages/PnF';

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
    path: '*',
    sidebar: () => <PnfSidebar/>,
    landing: () => <PnfLanding/>
  },    

];

export default routesMain;