import { HomeLanding, HomeSidebar } from './../pages/Home';

const routesMain = [
  {
    path: '/',
    exact: true,
    sidebar: () => <HomeSidebar/>,
    landing: () => <HomeLanding/>
  },
  {
    path: '/projects',
    sidebar: () => <h4>projects sidebar</h4>,
    landing: () => <h2>projects page</h2>
  },
  {
    path: '/tasks',
    sidebar: () => <h4>tasks sidebar</h4>,
    landing: () => <h2>tasks page</h2>
  },  
  {
    path: '*',
    sidebar: () => <h4>sidebar not found</h4>,
    landing: () => <h2>page not found</h2>
  },  
 
];

export default routesMain;