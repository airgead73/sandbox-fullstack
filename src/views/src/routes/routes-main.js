const routesMain = [
  {
    path: '/',
    exact: true,
    sidebar: () => <h4>home sidebar</h4>,
    main: () => <h2>home page</h2>
  },
  {
    path: '/projects',
    sidebar: () => <h4>projects sidebar</h4>,
    main: () => <h2>projects page</h2>
  },
  {
    path: '/tasks',
    sidebar: () => <h4>tasks sidebar</h4>,
    main: () => <h2>tasks page</h2>
  },  
  {
    path: '*',
    sidebar: () => <h4>sidebar not found</h4>,
    main: () => <h2>page not found</h2>
  },  
 
];

export default routesMain;