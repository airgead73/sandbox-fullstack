import { ProjectsLanding, ProjectsSidebar } from './../pages/Projects';
import { TasksLanding, TasksSidebar } from '../pages/Photos';
import { MilestonesLanding, MilestonesSidebar } from './../pages/Milestones';
import { PageNotFound, PageNotFoundSidebar } from './../pages/PageNotFound';

const routesProtected = [
  {
    path: '/projects',
    sidebar: () => <ProjectsSidebar/>,
    landing: () => <ProjectsLanding/>
  },
  {
    path: '/tasks',
    sidebar: () => <TasksSidebar/>,
    landing: () => <TasksLanding/>
  }, 
  {
    path: '/milestones',
    sidebar: () => <MilestonesSidebar/>,
    landing: () => <MilestonesLanding/>
  },    
  {
    path: '*',
    sidebar: () => <PageNotFoundSidebar/>,
    landing: () => <PageNotFound/>
  },  
 
];

export default routesProtected;