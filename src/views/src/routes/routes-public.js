import { HomeLanding, HomeSidebar } from './../pages/Home';

const routesPublic = [
  {
    path: '/',
    exact: true,
    sidebar: () => <HomeSidebar/>,
    landing: () => <HomeLanding/>
  }, 
];

export default routesPublic;