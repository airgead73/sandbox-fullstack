import { HomeLanding, HomeSidebar } from './../pages/Home';
import { ProjectsLanding, ProjectsSidebar } from './../pages/Projects';
import { TasksLanding, TasksSidebar } from './../pages/Tasks';

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
    path: '/tasks',
    sidebar: () => <TasksSidebar/>,
    landing: () => <TasksLanding/>
  },  
  {
    path: '*',
    sidebar: () => <h4>sidebar not found</h4>,
    landing: () => <h2>page not found</h2>
  },  
 
];

export default routesMain;