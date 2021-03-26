import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

const HomeSidebar = () => {
  return <h2>home sidebar content</h2>
}

const HomeMain = () => {
  return <h2>home main content</h2>
}

const ProjectsSidebar = () => {
  return <h2>projects sidebar content</h2>
}

const ProjectsMain = () => {
  return <h2>projects main content</h2>
}

const NotFoundSidebar = () => {
  return <h2>Sidebar: Not Found</h2>
}

const NotFoundMain = () => {
  return <h2>Page Not Found</h2>
}


const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <HomeSidebar/>,
    main: () => <HomeMain/>,
  },
  {
    path: '/projects',
    exact: false,
    sidebar: () => <ProjectsSidebar/>,
    main: () => <ProjectsMain/>
  },
  {
    path: '*',
    exact: false,
    sidebar: () => <NotFoundSidebar/>,
    main: () => <NotFoundMain/>
  }  
];

function App() {
  return (
    <React.Fragment>
      <header>
        <h1>Fullstack Application</h1>
      </header>
      <nav>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/projects">projects</Link></li>
      </ul>
      <hr/>
      <Switch>

      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
        >
          <route.sidebar/>
        </Route>
      ))}
      </Switch>
    </nav>
      <main>
        <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
          >
            <route.main/>
          </Route>
        ))}       
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
